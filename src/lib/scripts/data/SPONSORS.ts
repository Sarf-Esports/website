// © 2022 REVATI

// スポンサーの数が増えてギチギチになったら、
// `SponsorBanner.svelte>style>.banner-content` の `width` プロパティの値を調整してください。
// ただし、必ず `200%` 以上にしてください。
//
// スライドの速度を変更したい場合は、
// `SponsorBanner.svelte>style>ul` の `animation` プロパティの値を調整してください。

export const SPONSORS: {
	name: string;
	url: string;
	logo: string;
}[] = [
	{
		name: 'ガチサプ',
		url: 'https://gachisup.com',
		logo: 'gachisup.webp'
	},
	{
		name: 'XENOVA',
		url: 'https://xenova.shop',
		logo: 'xenova.webp'
	},
	{
		name: 'Undercade',
		url: 'https://undercade.official.ec',
		logo: 'undercade_white-bg.webp'
	}
];
