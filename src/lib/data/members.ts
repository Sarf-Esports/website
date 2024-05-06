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

export const MEMBER_LISTS: {
	name: string;
	members: {
		name: string;
		icon: string | null;
		twitter: string | null;
		youtube: string | null;
		twitch: string | null;
		homepage: string | null;
	}[];
}[] = [
	{
		name: 'Overwatch (JP)',
		members: [
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
				icon: 'hesty.webp',
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
				icon: 'minhyouk.webp',
				twitter: 'JeonMinHyouk_ow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			// // ▲ 選手
			// // ▼ コーチ
			{
				name: 'Byeolha',
				icon: 'byeolha.webp',
				twitter: 'ow_byeolha',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Fickle',
				icon: 'fickle.webp',
				twitter: 'Fickle_OW',
				youtube: null,
				twitch: null,
				homepage: null
			},
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
				icon: 'millfy.webp',
				twitter: 'miru_fiiyu',
				youtube: null,
				twitch: null,
				homepage: null
			}
		]
	},
	{
		name: 'Content Creator',
		members: [
			{
				name: 'DROWSY',
				icon: 'drowsy.webp',
				twitter: 'drowsy4150',
				youtube: 'UCm-Yd-aYSagMqVdMZSYiKLQ',
				twitch: 'drowsy4150',
				homepage: null
			},
			{
				name: 'めぬろ',
				icon: 'menuro.webp',
				twitter: 'Menuro1230',
				youtube: '@user-Menuro',
				twitch: 'menuro',
				homepage: null
			},
			{
				name: 'れるにゃ',
				icon: 'relle.webp',
				twitter: 'LanternCold',
				youtube: '@relle3674',
				twitch: null,
				homepage: null
			},
			{
				name: '破壊神こたろ',
				icon: 'hakaisinkotaro.webp',
				twitter: 'mareku1212',
				youtube: '@hakaisinkotaro',
				twitch: 'hakaisinnkotaro',
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
				name: 'はいせ',
				icon: null,
				twitter: 'h4ise05',
				youtube: null,
				twitch: null,
				homepage: 'https://behance.net/Haise__00'
			},
		]
	},
	{
		name: 'Operator',
		members: [
			{
				name: 'Kaz9nnN',
				icon: 'kaz.webp',
				twitter: 'KAZKUN_TSUYOI',
				youtube: null,
				twitch: 'rev_kazkun',
				homepage: null
			},
			{
				name: 'Life',
				icon: 'life.webp',
				twitter: 'l1fefn',
				youtube: null,
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
				name: '2止',
				icon: 'haineko.webp',
				twitter: 'zitome22',
				youtube: '@zitome2',
				twitch: 'zitome2',
				homepage: null
			}
		]
	}
];
