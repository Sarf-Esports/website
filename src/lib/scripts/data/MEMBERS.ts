// © 2022 REVATI

// # メンバーを追加する人へ
//
// 追加する際は以下のフォーマットで追加してください。
// 任意となっている項目には、`null` を指定することで指定なしとすることができます。
// メンバーの並びは名前の `数字順 -> アルファベット順 -> 五十音順 -> その他(ここまで着たら追加順)` でお願いします。
// やむを得ず並びを変える場合はコメントアウトでその旨を記載してください。
//
// {
//
//     // 名前 (必須)
//     // 長くしすぎないように。
//     memberName: 'Rinrin.rs',
//
//     // アイコン画像のファイル名 (任意)
//     // `/static/images/members/` に置く画像ファイルを指定してください。
//     // - 最大ファイルサイズ: 50KB (原則)
//     // - 推奨ファイルサイズ: 7KB 前後
//     // - 推奨画像フォーマット: WebP
//     // - 推奨画像サイズ: 256x256
//     // - 推奨画像比率: 1:1 (正方形以外は押し潰されて表示される)
//     // 画像ファイルの配置を忘れないでください。
//     icon: 'rinrin.png',
//
//	   // 役職 (任意)
//     // Player, Coach, Manager 等を指定してください。
//     // 長くしすぎないように。
//     role: 'Web Developer',
//
//     // 国旗 (任意)
//     // 'jp' が日本国、`us` がアメリカ合衆国、'kr' が大韓民国となります。
//     // 新しい国旗を追加する場合は `/static/images/flags/` に SVG ファイルとして追加し、
//     // `/src/lib/scripts/types.ts` に定義される `Member` 型の `country` フィールドの型にファイル名を追加してください。
//     country: 'jp',
//
//     // 生年月日 (任意)
//     // ┏━ 生年月日を一切指定しない場合は `null` にしてください。
//     // ┃
//     // ┃          ┏━ 年は必ず4桁の整数で西暦を指定してください。
//     // ┃          ┃  誕生日の月日のみを指定する場合はこれを `null` にしてください。
//     // ┃          ┃
//     // ┃          ┃           ┏━ 月は1から12までの整数で指定してください。
//     // ┃          ┃           ┃
//     // ┃          ┃           ┃         ┏━ 日は1から31までの整数で指定してください。
//     birthday: { year: 2006, month: 4, day: 13 },
//
//     // 年齢 (任意)
//     // 上の `birthday` フィールドで誕生日を年まで指定している場合は、
//     // 自動で計算(約1日の誤差あり)されるため `null` で問題はありません。
//     // 自動計算の上書きをすると、「(自称)」と付きます。
//     age: null,
//
//     // X(旧 Twitter) アカウントの ID (任意)
//     // アットマークはつけないでください。
//     twitter: 'Rinrin_2nd',
//
//     // YouTube チャンネル ID (任意)
//     // `@rinrin-rs` みたいな感じか `UCb3U3ovwzmagTBuzkdrsJkQ` みたいな形式で指定してください。
//     youtube: '@rinrin-rs',
//
//     // Twitch アカウント ID (任意)
//     // アットマークはつけないでください。
//     twitch: 'rinrin0413',
//
//     // ホームページの URL (任意)
//     homepage: 'https://rinrin.pages.dev',
//
//     // 使用デバイスとゲーム設定
//     // この項目のデータは `/src/lib/scripts/data/GEARS_AND_SETTINGS.ts` に記載します。
//     // 詳しくはそちらを参照してください。
//     // 指定しない場合は `null` にするのではなく、
//     // このプロパティ自体を省略してください。
//     gearsAndSettings: GEARS_AND_SETTINGS['rinrin']
// }
//
// なお、部門の並びは自由です。
//

import type { Member } from '$lib/scripts/types';
import { GEARS_AND_SETTINGS } from './GEARS_AND_SETTINGS';

export const MEMBER_LISTS: {
	divisionName: string;
	members: Member[];
}[] = [
	{
		divisionName: 'Overwatch',
		members: [
			{
				memberName: 'BAMBIE',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 3, day: 25 },
				age: null,
				twitter: 'bambie_ow',
				youtube: null,
				twitch: 'bambie_ow',
				homepage: null
			},
			{
				memberName: 'HESTY',
				icon: 'hesty.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 1999, month: 9, day: 17 },
				age: null,
				twitter: '__Hestyow',
				youtube: null,
				twitch: 'hesty_ow',
				homepage: null,
				gearsAndSettings: GEARS_AND_SETTINGS['hesty']
			},
			{
				memberName: 'Imalone',
				icon: null,
				role: 'Player',
				country: 'kr',
				birthday: null,
				age: null,
				twitter: 'Imalone_ow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'NineLives',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'NineLives_ow',
				youtube: null,
				twitch: 'ninelives_ow',
				homepage: null
			},
			{
				memberName: 'osato',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 6, day: 13 },
				age: null,
				twitter: 'osato_ow',
				youtube: '@osato_ow',
				twitch: 'osato_fps',
				homepage: null
			},
			{
				memberName: 'SECHAN',
				icon: null,
				role: 'Player',
				country: 'kr',
				birthday: null,
				age: null,
				twitter: 'sechan_O',
				youtube: null,
				twitch: null,
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
				youtube: '@sorryimsolace',
				twitch: 'sorryimsolace',
				homepage: null,
				gearsAndSettings: GEARS_AND_SETTINGS['solace']
			},
			// ▲ 選手
			// ▼ ディレクター
			{
				memberName: 'Fickle',
				icon: 'fickle.webp',
				role: 'Director',
				country: 'kr',
				birthday: { year: 1998, month: 7, day: 9 },
				age: null,
				twitter: 'Fickle_OW',
				youtube: null,
				twitch: 'fickle_ow',
				homepage: null
			},
			// ▲ ディレクター
			// ▼ コーチ
			{
				memberName: 'Forte',
				icon: null,
				role: 'Coach',
				country: 'kr',
				birthday: null,
				age: null,
				twitter: 'OW_Forte',
				youtube: '@OW_Forte',
				twitch: null,
				homepage: null
			},
			{
				memberName: 'STRIKE',
				icon: 'strike.webp',
				role: 'Coach',
				country: 'kr',
				birthday: { year: 2008, month: 5, day: 31 },
				age: 47,
				twitter: '_Strikeow_',
				youtube: null,
				twitch: 'owcstrike',
				homepage: null
			},
			// ▲ コーチ
			// ▼ アドバイザー
			{
				memberName: 'Byeolha',
				icon: 'byeolha.webp',
				role: 'Advisor',
				country: 'kr',
				birthday: { year: 2001, month: 1, day: 3 },
				age: null,
				twitter: 'ow_byeolha',
				youtube: null,
				twitch: null,
				homepage: null
			},
			// ▲ アドバイザー
			// ▼ マネージャー
			{
				memberName: 'みるふぃーゆ',
				icon: 'millfy.webp',
				role: 'Manager',
				country: 'jp',
				birthday: { year: 1997, month: 12, day: 12 },
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
				memberName: 'ZUN',
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
				memberName: 'kishi',
				icon: null,
				role: 'Translator',
				country: 'jp',
				birthday: { year: null, month: 9, day: 2 },
				age: null,
				twitter: 'kishi_krunk',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'はいせ',
				icon: 'haise.webp',
				role: 'Designer',
				country: 'jp',
				birthday: { year: 2005, month: 5, day: 30 },
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
				twitter: 'lex57D',
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
				memberName: 'Pear',
				icon: 'pear.webp',
				role: null,
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'pear_fps',
				youtube: null,
				twitch: 'pear_fps',
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
