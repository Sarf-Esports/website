// © 2022 REVATI

import * as cheerio from 'cheerio';
import axios from 'axios';
import { MEMBER_LISTS } from '$lib/scripts/data/MEMBERS';
import { COACHES } from '$lib/scripts/data/COACHING_PJ';

let invalidSocials = 0;

function sleep() {
	const start = Date.now();
	while (Date.now() < start + 1800);
}

function printError(name: string, url: string) {
	console.error(`      ${name}: 404 - ${url}`);
	invalidSocials++;
}

function handleError(
	e: {
		status: number;
		message: string;
	},
	name: string,
	url: string
) {
	if (e.status === 404) printError(name, url);
	else console.error(`      ${name}: Unexpected Error - ${e.message}`);
}

async function validate(url: string, name: string) {
	const axiosConfig = { headers: { 'User-Agent': 'bot' } };
	return await axios
		.get(url, axiosConfig)
		.then(async () => {
			// Twitch may not return the correct result on the first request,
			// so we need to fetch again after 1400 milliseconds.
			if (name === 'Twitch') {
				sleep();
				await axios
					.get(url)
					.then((res) => {
						const $ = cheerio.load(res.data);
						if (
							$('meta[property="og:title"]').attr('content') !== 'Twitch' &&
							$('meta[property="og:url"]').attr('content') !== undefined
						)
							return;
						printError(name, url);
					})
					.catch((e) => handleError(e, name, url));
			}
		})
		.catch((e) => handleError(e, name, url));
}

for (const { members, divisionName } of MEMBER_LISTS) {
	console.log('  Checking division: ' + divisionName);
	for (const { memberName, twitter, youtube, twitch, homepage } of members) {
		console.log('    Checking member: ' + memberName);
		if (twitter !== null) await validate('https://x.com/' + twitter, 'X');
		if (youtube !== null)
			await validate(
				'https://youtube.com/' + (youtube[0] === '@' ? youtube : 'channel/' + youtube),
				'YouTube'
			);
		if (twitch !== null) await validate('https://twitch.tv/' + twitch, 'Twitch');
		if (homepage !== null) await validate(homepage, 'Homepage');
	}
}

console.log('  Checking coaches for the Coaching PJ:');
for (const { name, twitter } of COACHES) {
	console.log('    Checking coach: ' + name);
	if (twitter !== null) await validate('https://x.com/' + twitter, 'X');
}

if (invalidSocials < 1) console.log('\n All socials are valid!');
else console.log(`\n ${invalidSocials} social${1 < invalidSocials ? 's are' : ' is'} invalid :(`);
console.log(
	' * This validator may not be 100% accurate, please check the URLs manually if needed.'
);
