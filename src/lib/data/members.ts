// © 2022 - 2023 REVATI

// # メンバーを追加する人へ
//
// 追加するときは以下のフォーマットで追加してください:
//
// {
//     // メンバーの名前
//     // null にはしないこと。あとあんまり長くしないでね^^;
//     'name': 'Rinrin.rs',
//
//     // メンバーのアイコン画像のファイル名
//     // `/assets/images/members/` 配下に置く画像ファイルの名前を指定してください
//     // ただ単にアイコンが無い人や著作権の問題で貼れない人は `null` にして
//     'icon': 'rinrin.png',
//
//     // メンバーの Twitter アカウントID (アットマークはつけないで)
//     // ない場合は `null` にしてください
//     'twitter': 'rinrin_2nd',
//
//     // メンバーの YouTubeチャンネルID
//     // `@rinrin-rs` みたいな感じか `UCb3U3ovwzmagTBuzkdrsJkQ` みたいな形式で指定してください
//     // ない場合は `null` にしてください
//     'youtube': '@rinrin-rs',
//
//     // メンバーの TwitchアカウントID (アットマークはつけないで)
//     // ない場合は `null` にしてください
//     'twitch': 'rinrin0413'
//
//     // メンバーのホームページの URL
//     // ない場合は `null` にしてください
//     'homepage': 'https://rinrin.pages.dev'
// }
//
// 並びは名前の `数字順 -> アルファベット順 -> 五十音順 -> その他(ここまで着たら追加順)` でお願いします。
// また、メンバーのアイコン画像を指定した場合は `/assets/images/members/` 配下に置くのを忘れないでください。

export const member_lists = [
	{
		kind: 'fortnite',
		list: [
			{
				name: 'Life',
				icon: 'life.webp',
				twitter: 'l1fefn',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Retchiri',
				icon: null,
				twitter: 'retchiri1',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'のあ',
				icon: null,
				twitter: 'NOAHhhhhh156',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'ぺな',
				icon: 'pena.webp',
				twitter: 'Penaclip',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'ぼひ',
				icon: 'bohi.webp',
				twitter: 'WilyGuysBohi',
				youtube: '@user-yf4gf8qw8s',
				twitch: null,
				homepage: null
			}
		]
	},
	{
		kind: 'apex',
		list: [
			{
				name: '変なお兄さん',
				icon: 'henna_onisan.webp',
				twitter: 'hennaOnisaN6',
				youtube: null,
				twitch: 'jp_hennaonisan ',
				homepage: null
			}
		]
	},
	{
		kind: 'minecraft',
		list: [
			{
				name: 'GEN3987',
				icon: 'gen.webp',
				twitter: 'GEN3987',
				youtube: '@GEN3987',
				twitch: '2ndgen3987',
				homepage: null
			},
			{
				name: 'RetoRuto9900K',
				icon: 'retoruto.webp',
				twitter: 'tutinoko_kusaa',
				youtube: '@reto9900k',
				twitch: null,
				homepage: null
			},
			{
				name: 'Rinrin.rs',
				icon: 'rinrin.webp',
				twitter: 'Rinrin_2nd',
				youtube: '@rinrin-rs',
				twitch: 'rinrin0413',
				homepage: 'https://rinrin.pages.dev'
			},
			{
				name: 'がすたー',
				icon: 'gaster.webp',
				twitter: 'Gaster_EX',
				youtube: '@gaster_ch1425',
				twitch: null,
				homepage: null
			},
			{
				name: '灰猫',
				icon: 'haineko.webp',
				twitter: 'Nui_256_',
				youtube: '@Nu1_256',
				twitch: null,
				homepage: null
			},
			{
				name: 'バード',
				icon: 'bird.webp',
				twitter: 'bird132297',
				youtube: '@-bird-bird-bird-',
				twitch: null,
				homepage: null
			},
			{
				name: 'リョウマ',
				icon: 'ryoma.webp',
				twitter: 'Ryoma_Gaming_MC',
				youtube: '@RyomaGaming_MC',
				twitch: null,
				homepage: null
			},
			{
				name: 'ルイル',
				icon: 'ruilu.webp',
				twitter: 'Ruilu_Adora',
				youtube: '@Ruilu_Adora',
				twitch: null,
				homepage: null
			}
		]
	},
	{
		kind: 'streamer',
		list: [
			{
				name: 'Kaz9nnN',
				icon: 'kaz.webp',
				twitter: 'Kaz9nnN',
				youtube: null,
				twitch: 'kaz9nnn1',
				homepage: null
			},
			{
				name: 'シロラ',
				icon: 'sirora.webp',
				twitter: 'sirora_46pq',
				youtube: null,
				twitch: 'sirora_46pq',
				homepage: null
			},
			{
				name: 'めぬろ',
				icon: 'menuro.webp',
				twitter: 'Menuro1230',
				youtube: '@user-Menuro',
				twitch: 'menuro',
				hompage: null
			},
			{
				name: 'らいふれっくす',
				icon: 'lifelex.webp',
				twitter: 'Lifelex06',
				youtube: '@Lifelex57',
				twitch: null,
				homepage: null
			}
		]
	},
	{
		kind: 'creator',
		list: [
			{
				name: 'Greed',
				icon: 'greed.webp',
				twitter: 'Grdvisuals',
				youtube: null,
				twitch: null,
				homepage: 'https://behance.net/GrdCreate'
			},
			{
				name: 'jin',
				icon: 'jin.webp',
				twitter: 'HIGHJEANX',
				youtube: null,
				twitch: null,
				homepage: 'https://foriio.com/HIGHJEANX'
			},
			{
				name: 'Suna',
				icon: 'suna.webp',
				twitter: 'suna0801',
				youtube: null,
				twitch: null,
				homepage: 'https://suna-video.com'
			}
		]
	}
];
