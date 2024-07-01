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
//     // メンバーの国旗
//     // 'jp' が日本国、`us` がアメリカ合衆国、'kr' が大韓民国です
//     // 新しい国旗を追加する場合は `static/images/flags/` 配下に SVG で追加して、
//     // このファイル80行目あたりの `country` の型に追加してください
//     // 指定しない場合は `null` にしてください
//     // 'country': 'jp',
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
// - 最大ファイルサイズ: 50KB (原則)
// - 推奨画像フォーマット: WebP
// - 推奨画像サイズ: 256x256
// - 推奨画像比率: 1:1 (正方形以外は押し込まれて表示される)

export const MEMBER_LISTS: {
	divisionName: string;
	members: {
		memberName: string;
		icon: string | null;
		role: string | null;
		country: 'jp' | 'us' | 'kr' | null;
		birthday: { year: number | null; month: number; day: number } | null;
		age: number | null;
		twitter: string | null;
		youtube: string | null;
		twitch: string | null;
		homepage: string | null;
	}[];
}[] = [
	{
		divisionName: 'Overwatch',
		members: [
			{
				memberName: 'epic',
				icon: 'epic.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 2002, month: 4, day: 6 },
				age: null,
				twitter: 'ep11111123',
				youtube: null,
				twitch: 'ep1c_ow',
				homepage: null
			},
			{
				memberName: 'Fearful',
				icon: 'fearful.webp',
				role: 'Player',
				country: 'kr',
				birthday: { year: 2005, month: 4, day: 5 },
				age: null,
				twitter: 'fearful0405',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'harutoon',
				icon: 'harutoon.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 2005, month: 3, day: 14 },
				age: null,
				twitter: 'harutoon_FN',
				youtube: null,
				twitch: 'harutoon_',
				homepage: null
			},
			{
				memberName: 'Hesty',
				icon: 'hesty.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 1999, month: 9, day: 17 },
				age: null,
				twitter: '__Hestyow',
				youtube: null,
				twitch: 'hesty_ow',
				homepage: null
			},
			{
				memberName: 'HoFac',
				icon: 'hofac.webp',
				role: 'Player',
				country: 'kr',
				birthday: { year: 2005, month: 1, day: 27 },
				age: null,
				twitter: 'HoneyFactory_OW',
				youtube: '@ahoneyfactory9887',
				twitch: 'hofac_ow',
				homepage: null
			},
			{
				memberName: 'solace',
				icon: 'solace.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 2005, month: 3, day: 22 },
				age: null,
				twitter: 'sorryimsolace',
				youtube: null,
				twitch: 'sorryimsolace',
				homepage: null
			},
			{
				memberName: 'にんじゃはむぞー',
				icon: 'ninja_hamuzo.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 2002, month: 11, day: 3 },
				age: null,
				twitter: 'ninja_hamuzo',
				youtube: null,
				twitch: 'nhzow',
				homepage: null
			},
			// // ▲ 選手
			// // ▼ コーチ
			{
				memberName: 'Byeolha',
				icon: 'byeolha.webp',
				role: 'Coach',
				country: 'kr',
				birthday: { year: 2001, month: 1, day: 3 },
				age: null,
				twitter: 'ow_byeolha',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'Fickle',
				icon: 'fickle.webp',
				role: 'Coach',
				country: 'kr',
				birthday: { year: 1998, month: 7, day: 7 },
				age: null,
				twitter: 'Fickle_OW',
				youtube: null,
				twitch: 'fickle_ow',
				homepage: null
			},
			{
				memberName: 'MinHyouk',
				icon: 'minhyouk.webp',
				role: 'Coach',
				country: 'kr',
				birthday: { year: 2005, month: 11, day: 19 },
				age: null,
				twitter: 'JeonMinHyouk_ow',
				youtube: null,
				twitch: 'jeonminhyouk_ow',
				homepage: null
			},
			{
				memberName: 'STRIKE',
				icon: 'strike.webp',
				role: 'Coach',
				country: 'kr',
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
				memberName: 'みるふぃーゆ',
				icon: 'millfy.webp',
				role: 'Manager',
				country: 'jp',
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
		divisionName: 'Content Creator',
		members: [
			{
				memberName: 'CLANK',
				icon: 'clank.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: { year: 1998, month: 7, day: 10 },
				age: null,
				twitter: 'clank_ccc',
				youtube: null,
				twitch: 'clank_owl',
				homepage: null
			},
			{
				memberName: 'DROWSY',
				icon: 'drowsy.webp',
				role: 'Streamer',
				country: 'kr',
				birthday: { year: 2001, month: 2, day: 22 },
				age: null,
				twitter: 'drowsy4150',
				youtube: 'UCm-Yd-aYSagMqVdMZSYiKLQ',
				twitch: 'drowsy4150',
				homepage: 'https://chzzk.naver.com/bc7110b6e2e16456e32cc6d5bb939a3b'
			},
			{
				memberName: 'めぬろ',
				icon: 'menuro.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: { year: 1999, month: 12, day: 30 },
				age: null,
				twitter: 'Menuro1230',
				youtube: '@user-Menuro',
				twitch: 'menuro',
				homepage: null
			},
			{
				memberName: 'れるにゃ',
				icon: 'relle.webp',
				role: 'MCBE Map Creator',
				country: 'jp',
				birthday: { year: 2002, month: 7, day: 23 },
				age: null,
				twitter: 'LanternCold',
				youtube: '@relle3674',
				twitch: null,
				homepage: null
			},
			{
				memberName: '破壊神こたろ',
				icon: 'hakaisinkotaro.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'mareku1212',
				youtube: '@hakaisinkotaro',
				twitch: 'hakaisinnkotaro',
				homepage: null
			},
			{
				memberName: '碧海まっちゃ',
				icon: 'aomi_matcha.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: { year: null, month: 2, day: 28 },
				age: null,
				twitter: 'aomi_matcha',
				youtube: '@aomi_matcha',
				twitch: 'aomi_matcha',
				homepage: null
			},
			{
				memberName: '宮城大豆',
				icon: 'ow_zundamon.webp',
				role: 'YouTuber',
				country: 'jp',
				birthday: { year: null, month: 1, day: 7 },
				age: null,
				twitter: 'OWzundamon',
				youtube: '@overwatch9753',
				twitch: null,
				homepage: null
			}
		]
	},
	{
		divisionName: 'Other',
		members: [
			{
				memberName: 'はいせ',
				icon: null,
				role: 'Designer',
				country: 'jp',
				birthday: { year: null, month: 5, day: 30 },
				age: null,
				twitter: 'h4ise05',
				youtube: null,
				twitch: null,
				homepage: 'https://behance.net/Haise__00'
			},
			{
				memberName: 'らいふれっくす',
				icon: 'lifelex.webp',
				role: 'Video Editor',
				country: 'jp',
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
		divisionName: 'Operator',
		members: [
			{
				memberName: 'しろねこ',
				icon: '46nek_0.webp',
				role: 'Owner',
				country: 'jp',
				birthday: { year: 2005, month: 3, day: 23 },
				age: null,
				twitter: '46nek_0',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: '2止',
				icon: 'haineko.webp',
				role: null,
				country: 'jp',
				birthday: { year: 2004, month: 4, day: 7 },
				age: null,
				twitter: 'zitome22',
				youtube: '@zitome2',
				twitch: 'zitome2',
				homepage: null
			},
			{
				memberName: 'Kaz9nnN',
				icon: 'kaz.webp',
				role: null,
				country: 'jp',
				birthday: { year: 2003, month: 4, day: 23 },
				age: null,
				twitter: 'KAZKUN_TSUYOI',
				youtube: null,
				twitch: 'rev_kazkun',
				homepage: null
			},
			{
				memberName: 'Life',
				icon: 'life.webp',
				role: null,
				country: 'jp',
				birthday: { year: 2007, month: 8, day: 9 },
				age: null,
				twitter: 'l1fefn',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'Rinrin.rs',
				icon: 'rinrin.webp',
				role: 'Web Developer',
				country: 'jp',
				birthday: { year: 2006, month: 4, day: 13 },
				age: null,
				twitter: 'Rinrin_2nd',
				youtube: '@rinrin-rs',
				twitch: 'rinrin0413',
				homepage: 'https://rinrin.pages.dev'
			},
			{
				memberName: 'ひなこ',
				icon: null,
				role: null,
				country: 'jp',
				birthday: { year: 2004, month: 10, day: 14 },
				age: null,
				twitter: 'hinakunaiueo',
				youtube: '@hinakox9220',
				twitch: 'hinakoooo_fn',
				homepage: null
			}
		]
	}
];
