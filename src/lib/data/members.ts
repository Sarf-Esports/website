// © 2022 REVATI

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
//     // メンバーの X(旧Twitter)アカウントID (アットマークはつけないで)
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
// どうしても並びを変えたい場合はコメントアウトでその旨を記載してください。
//
// また、メンバーのアイコン画像を指定した場合は `/assets/images/members/` 配下に置くのを忘れないでください。

export const MEMBER_LISTS = [
	{
		name: 'Fortnite',
		members: [
			{
				name: 'Life',
				icon: 'life.webp',
				twitter: 'l1fefn',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Rialy',
				icon: null,
				twitter: 'Ria1fn',
				youtube: '@Riayfps',
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
		name: 'Apex Legends',
		members: [
			{
				name: 'yuki7',
				icon: 'yuki.webp',
				twitter: 'yuki_fpsGG',
				youtube: '@yuki7_',
				twitch: 'yuki7_fps',
				homepage: null
			},
			{
				name: 'シュガー',
				icon: 'sugar.webp',
				twitter: 'SQ0356',
				youtube: null,
				twitch: null,
				hompage: null
			},
			{
				name: 'れんだよ',
				icon: null,
				twitter: 'RECT_2434',
				youtube: null,
				twitch: null,
				homepage: null
			}
		]
	},
	{
		name: 'Overwatch (JP)',
		members: [
			{
				name: 'DROWSY',
				icon: null,
				twitter: 'drowsy4150',
				youtube: 'UCm-Yd-aYSagMqVdMZSYiKLQ',
				twitch: 'drowsy4150',
				homepage: null
			},
			{
				name: 'epic',
				icon: null,
				twitter: 'ep11111123',
				youtube: null,
				twitch: 'ep1c_ow',
				homepage: null
			},
			{
				name: 'harutoon',
				icon: null,
				twitter: 'harutoon_FN',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Hesty',
				icon: null,
				twitter: '__Hestyow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'HoFac',
				icon: null,
				twitter: 'HoneyFactory_OW',
				youtube: '@ahoneyfactory9887',
				twitch: null,
				homepage: null
			},
			{
				name: 'MinHyouk',
				icon: null,
				twitter: 'JeonMinHyouk_ow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: '破壊神こたろ',
				icon: null,
				twitter: 'mareku1212',
				youtube: '@hakaisinkotaro',
				twitch: 'hakaisinnkotaro',
				homepage: null
			},
			// ▲ 選手
			// ▼ コーチ
			{
				name: 'STRIKE',
				icon: 'strike.webp',
				twitter: '_Strikeow_',
				youtube: null,
				twitch: null,
				homepage: null
			},
			// ▲ コーチ
			// ▼ マネージャー
			{
				name: 'みるふぃーゆ',
				icon: null,
				twitter: 'miru_fiiyu',
				youtube: null,
				twitch: null,
				homepage: null
			}
		]
	},
	{
		name: 'Minecraft',
		members: [
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
				twitter: 'Reto9900TN',
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
				name: 'Tow',
				icon: 'tow.webp',
				twitter: 'Towdayo',
				youtube: '@ToW-da4',
				twitch: 'tow1113',
				homepage: null
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
				twitch: 'nui_256',
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
				twitch: 'ruiluadora',
				homepage: null
			},
			{
				name: 'れる',
				icon: 'relle.webp',
				twitter: 'LanternCold',
				youtube: '@relle3674',
				twitch: null,
				homepage: null
			}
		]
	},
	{
		name: 'Streamer',
		members: [
			{
				name: 'Junnyang',
				icon: null,
				twitter: 'junnyang77_ow',
				youtube: '@JunnyangInSeoul',
				twitch: 'junnyang77',
				homepage: null
			},
			{
				name: 'Kaz9nnN',
				icon: 'kaz.webp',
				twitter: 'KAZKUN_TSUYOI',
				youtube: null,
				twitch: 'rev_kazkun',
				homepage: null
			},
			{
				name: 'シロラ',
				icon: 'sirora.webp',
				twitter: 'sirora_46pq',
				youtube: null,
				twitch: 'sirora46',
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
				twitch: 'lilex7',
				homepage: null
			},
			{
				name: '碧海まっちゃ',
				icon: 'aomi_matcha.webp',
				twitter: 'aomi_matcha',
				youtube: '@aomi_matcha',
				twitch: 'aomi_matcha',
				homepage: null
			}
		]
	},
	{
		name: 'Creator',
		members: [
			{
				name: 'marlone',
				icon: null,
				twitter: 'marloneKR',
				youtube: null,
				twitch: null,
				homepage: 'https://foriio.com/marlone'
			},
			{
				name: 'jin',
				icon: 'jin.webp',
				twitter: 'fIuffyVibes',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Nkyn',
				icon: 'suna.webp',
				twitter: 'nkyn_oshi',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'はいせ',
				icon: null,
				twitter: 'h4ise05',
				youtube: null,
				twitch: null,
				homepage: 'https://behance.net/Haise__00'
			}
		]
	}
];
