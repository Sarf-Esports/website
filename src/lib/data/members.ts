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
//	   // メンバーの役職 (例: Player, Coach, Manager)
//     // 指定しない場合は `null` にしてください
//     'role': 'Web Developer',
//
//     // メンバーの生年月日 (YYYY-MM-DD)
//     // ┏━ 生年月日を一切指定しない場合は `null` にしてください
//     // ┃
//     // ┃          ┏━ 年は必ず4桁の整数で西暦を指定してください
//     // ┃          ┃  誕生日の月日のみを指定する場合はこれは `null` にしてください
//     // ┃          ┃
//     // ┃          ┃           ┏━ 月は1から12までの整数で指定してください
//     // ┃          ┃           ┃
//     // ┃          ┃           ┃         ┏━ 日は1から31までの整数で指定してください
//     'birthday': { year: 2006, month: 4, day: 13 },
//
//     // メンバーの年齢
//     // 上記で誕生日を年まで指定している場合は、
//     // 自動で計算(誤差約1日)されるので `null` で良いが、上書も可能
//     // 指定しない場合は `null` にしてください
//     'age': null,
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
		role: string | null;
		birthday: { year: number | null; month: number; day: number } | null;
		age: number | null;
		twitter: string | null;
		youtube: string | null;
		twitch: string | null;
		homepage: string | null;
	}[];
}[] = [
	{
		name: 'Overwatch',
		members: [
			{
				name: 'epic',
				icon: null,
				role: 'Player',
				birthday: { year: null, month: 4, day: 6 },
				age: null,
				twitter: 'ep11111123',
				youtube: null,
				twitch: 'ep1c_ow',
				homepage: null
			},
			{
				name: 'Fearful',
				icon: 'fearful.webp',
				role: 'Player',
				birthday: null,
				age: null,
				twitter: 'fearful0405',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'harutoon',
				icon: null,
				role: 'Player',
				birthday: null,
				age: null,
				twitter: 'harutoon_FN',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Hesty',
				icon: 'hesty.webp',
				role: 'Player',
				birthday: null,
				age: null,
				twitter: '__Hestyow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'HoFac',
				icon: null,
				role: 'Player',
				birthday: null,
				age: null,
				twitter: 'HoneyFactory_OW',
				youtube: '@ahoneyfactory9887',
				twitch: null,
				homepage: null
			},
			{
				name: 'solace',
				icon: null,
				role: 'Player',
				birthday: null,
				age: null,
				twitter: 'sorryimsolace',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'にんじゃはむぞー',
				icon: 'ninja_hamuzo.webp',
				role: 'Player',
				birthday: null,
				age: null,
				twitter: 'ninja_hamuzo',
				youtube: null,
				twitch: null,
				homepage: 'https://liquipedia.net/overwatch/NHZ'
			},
			// // ▲ 選手
			// // ▼ コーチ
			{
				name: 'Byeolha',
				icon: 'byeolha.webp',
				role: 'Coach',
				birthday: null,
				age: null,
				twitter: 'ow_byeolha',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Fickle',
				icon: 'fickle.webp',
				role: 'Coach',
				birthday: null,
				age: null,
				twitter: 'Fickle_OW',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'MinHyouk',
				icon: 'minhyouk.webp',
				role: 'Coach',
				birthday: null,
				age: null,
				twitter: 'JeonMinHyouk_ow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'STRIKE',
				icon: 'strike.webp',
				role: 'Coach',
				birthday: null,
				age: null,
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
				role: 'Manager',
				birthday: { year: null, month: 12, day: 12 },
				age: null,
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
				name: 'CLANK',
				icon: 'clank.webp',
				role: null,
				birthday: { year: 1998, month: 7, day: 10 },
				age: null,
				twitter: 'clank_ccc',
				youtube: null,
				twitch: 'clank_owl',
				homepage: null
			},
			{
				name: 'DROWSY',
				icon: 'drowsy.webp',
				role: null,
				birthday: { year: 2001, month: 2, day: 22 },
				age: null,
				twitter: 'drowsy4150',
				youtube: 'UCm-Yd-aYSagMqVdMZSYiKLQ',
				twitch: 'drowsy4150',
				homepage: null
			},
			{
				name: 'めぬろ',
				icon: 'menuro.webp',
				role: null,
				birthday: { year: 1999, month: 12, day: 30 },
				age: null,
				twitter: 'Menuro1230',
				youtube: '@user-Menuro',
				twitch: 'menuro',
				homepage: null
			},
			{
				name: 'れるにゃ',
				icon: 'relle.webp',
				role: null,
				birthday: { year: 2002, month: 7, day: 23 },
				age: null,
				twitter: 'LanternCold',
				youtube: '@relle3674',
				twitch: null,
				homepage: null
			},
			{
				name: '破壊神こたろ',
				icon: 'hakaisinkotaro.webp',
				role: null,
				birthday: null,
				age: null,
				twitter: 'mareku1212',
				youtube: '@hakaisinkotaro',
				twitch: 'hakaisinnkotaro',
				homepage: null
			},
			{
				name: '碧海まっちゃ',
				icon: 'aomi_matcha.webp',
				role: null,
				birthday: { year: null, month: 2, day: 28 },
				age: null,
				twitter: 'aomi_matcha',
				youtube: '@aomi_matcha',
				twitch: 'aomi_matcha',
				homepage: null
			},
			{
				name: '宮城大豆',
				icon: 'ow_zundamon.webp',
				role: null,
				birthday: null,
				age: null,
				twitter: 'OWzundamon',
				youtube: '@overwatch9753',
				twitch: null,
				homepage: null
			}
		]
	},
	{
		name: 'Other',
		members: [
			{
				name: 'はいせ',
				icon: null,
				role: 'Designer',
				birthday: { year: null, month: 5, day: 30 },
				age: null,
				twitter: 'h4ise05',
				youtube: null,
				twitch: null,
				homepage: 'https://behance.net/Haise__00'
			},
			{
				name: 'らいふれっくす',
				icon: 'lifelex.webp',
				role: 'Video Editor',
				birthday: { year: 2006, month: 12, day: 24 },
				age: null,
				twitter: 'Lifelex57',
				youtube: '@Lifelex57',
				twitch: 'lilex7',
				homepage: null
			}
		]
	},
	{
		name: 'Operator',
		members: [
			{
				name: 'しろねこ',
				icon: '46nek_0.webp',
				role: 'Owner',
				birthday: { year: 2005, month: 3, day: 23 },
				age: null,
				twitter: '46nek_0',
				youtube: '@gentei-koukai',
				twitch: '46nek_0',
				homepage: null
			},
			{
				name: '2止',
				icon: 'haineko.webp',
				role: null,
				birthday: { year: 2004, month: 4, day: 7 },
				age: null,
				twitter: 'zitome22',
				youtube: '@zitome2',
				twitch: 'zitome2',
				homepage: null
			},
			{
				name: 'Kaz9nnN',
				icon: 'kaz.webp',
				role: null,
				birthday: { year: null, month: 4, day: 23 },
				age: null,
				twitter: 'KAZKUN_TSUYOI',
				youtube: null,
				twitch: 'rev_kazkun',
				homepage: null
			},
			{
				name: 'Life',
				icon: 'life.webp',
				role: null,
				birthday: { year: 2007, month: 8, day: 9 },
				age: null,
				twitter: 'l1fefn',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				name: 'Rinrin.rs',
				icon: 'rinrin.webp',
				role: 'Web Developer',
				birthday: { year: 2006, month: 4, day: 13 },
				age: null,
				twitter: 'Rinrin_2nd',
				youtube: '@rinrin-rs',
				twitch: 'rinrin0413',
				homepage: 'https://rinrin.pages.dev'
			}
		]
	}
];
