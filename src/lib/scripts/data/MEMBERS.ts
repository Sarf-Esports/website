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
				birthday: null,
				age: null,
				twitter: 'bambie_ow',
				youtube: null,
				twitch: 'bambie_ow',
				homepage: null
			},
			{
				memberName: 'HINIS4Ku',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'HINIS4Ku_ow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'm5ri',
				icon: null,
				role: 'Player',
				country: 'us',
				birthday: null,
				age: null,
				twitter: 'm5riOW',
				youtube: null,
				twitch: 'm5riow',
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
				memberName: 'shisui',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'shisui_441',
				youtube: null,
				twitch: 'shisui_441',
				homepage: null
			},
			{
				memberName: 'STRIKE',
				icon: 'strike.webp',
				role: 'Player',
				country: 'kr',
				birthday: { year: 2008, month: 5, day: 31 },
				age: 47,
				twitter: 'strike_nise',
				youtube: null,
				twitch: 'owcstrike',
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
				homepage: null,
				gearsAndSettings: GEARS_AND_SETTINGS['ninja_hamuzo']
			},
			{
				memberName: 'はるを。',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'wo_33_',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: '破壊神こたろ',
				icon: 'hakaisinkotaro.webp',
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'mareku1212',
				youtube: '@hakaisinkotaro',
				twitch: 'hakaisinnkotaro',
				homepage: null,
				gearsAndSettings: GEARS_AND_SETTINGS['hakaisinkotaro']
			},
			// ▲ 選手
			// ▼ マネージャー
			{
				memberName: 'Fickle',
				icon: 'fickle.webp',
				role: 'Manager',
				country: 'kr',
				birthday: { year: 1998, month: 7, day: 9 },
				age: null,
				twitter: 'Fickle_OW',
				youtube: null,
				twitch: 'fickle_ow',
				homepage: null
			},
			{
				memberName: 'N4rAKq',
				icon: null,
				role: 'Manager',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'N4rAKq_ow',
				youtube: null,
				twitch: 'n4rakq_ow',
				homepage: null
			}
		]
	},
	{
		divisionName: 'Overwatch Academy',
		members: [
			{
				memberName: 'hotaro',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 3, day: 13 },
				age: null,
				twitter: 'Hotaro_ow',
				youtube: null,
				twitch: 'hotaro_ow',
				homepage: null
			},
			{
				memberName: 'lud',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 9, day: 10 },
				age: null,
				twitter: 'Luvica_Lore',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'MOL',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 8, day: 24 },
				age: null,
				twitter: 'moruka0824',
				youtube: null,
				twitch: 'mol_ow',
				homepage: null
			},
			{
				memberName: 'Sorasuke',
				icon: null,
				role: null,
				country: null,
				birthday: null,
				age: null,
				twitter: 'NotSorasuke',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'tino',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 9, day: 29 },
				age: null,
				twitter: 'rqa_j',
				youtube: null,
				twitch: 'rqa_ow',
				homepage: null
			},
			{
				memberName: 'XuanSeo',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 12, day: 25 },
				age: null,
				twitter: 'XuanSeo_OW',
				youtube: null,
				twitch: 'XuanSeo',
				homepage: null
			},
			{
				memberName: 'YEN',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 12, day: 23 },
				age: null,
				twitter: 'yen_0w',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'zenith',
				icon: null,
				role: null,
				country: null,
				birthday: null,
				age: null,
				twitter: 'zenith_ow_',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'かぼちゃpumpkin',
				icon: null,
				role: null,
				country: null,
				birthday: { year: null, month: 1, day: 1 },
				age: null,
				twitter: 'pumpkin_hk',
				youtube: null,
				twitch: 'pumpkin_kabotyaaa',
				homepage: null
			},
			// ▲ 選手
			// ▼ コーチ
			{
				memberName: 'HESTY',
				icon: 'hesty.webp',
				role: 'Coach',
				country: 'jp',
				birthday: { year: 1999, month: 9, day: 17 },
				age: null,
				twitter: '__Hestyow',
				youtube: null,
				twitch: 'hesty_ow',
				homepage: null,
				gearsAndSettings: GEARS_AND_SETTINGS['hesty']
			},
			// ▲ コーチ
			// ▼ マネージャー
			{
				memberName: 'NineLives',
				icon: null,
				role: 'Manager',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'NineLives_ow',
				youtube: null,
				twitch: 'ninelives_ow',
				homepage: null
			}
		]
	},
	{
		divisionName: "Overwatch Woman's",
		members: [
			{
				memberName: 'Elty',
				icon: null,
				role: 'Player',
				country: 'kr',
				birthday: null,
				age: null,
				twitter: 'elty_owo',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'Sleepy',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 11, day: 29 },
				age: null,
				twitter: 'ss_s1eepy',
				youtube: null,
				twitch: 'ss_s1eepy',
				homepage: null
			},
			{
				memberName: 'ToT',
				icon: null,
				role: 'Player',
				country: 'kr',
				birthday: null,
				age: null,
				twitter: 'T0T_ow',
				youtube: null,
				twitch: null,
				homepage: null
			},
			{
				memberName: 'エマ',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'zen__ema',
				youtube: '@エマ-p8r',
				twitch: 'emao425',
				homepage: null
			},
			{
				memberName: 'てお',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 7, day: 29 },
				age: null,
				twitter: 'teo_kure5',
				youtube: null,
				twitch: 'teo_walkure',
				homepage: null
			},
			{
				memberName: 'まるこ',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'umya58n',
				youtube: null,
				twitch: 'umya58n',
				homepage: null
			},
			{
				memberName: '翆',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 2, day: 15 },
				age: null,
				twitter: 'suisan_ow',
				youtube: null,
				twitch: 'sui0zasso',
				homepage: null
			},
			{
				memberName: '瓜果めろん',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'melon_urika',
				youtube: '@melonurika8543',
				twitch: 'melon_urika',
				homepage: null
			},
			// ▲ 選手
			// ▼ コーチ
			{
				memberName: 'CLANK',
				icon: 'clank.webp',
				role: 'Coach',
				country: 'jp',
				birthday: { year: 1998, month: 7, day: 10 },
				age: null,
				twitter: 'clank_ccc',
				youtube: null,
				twitch: 'clank_owl',
				homepage: null
			},
			{
				memberName: 'molly',
				icon: null,
				role: 'Coach',
				country: 'us',
				birthday: { year: 2004, month: 8, day: 18 },
				age: null,
				twitter: 'm5riOW',
				youtube: '@m5riOW',
				twitch: 'm5riow',
				homepage: null
			}
		]
	},
	{
		divisionName: 'Apex',
		members: [
			{
				memberName: 'kiwamyX',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: 2007, month: 4, day: 30 },
				age: null,
				twitter: 'lozexyz111',
				youtube: '@kiwami7140',
				twitch: 'kiwamyx',
				homepage: null
			},
			{
				memberName: 'Kxuh',
				icon: 'kxuh.webp',
				role: 'Player',
				country: 'jp',
				birthday: { year: 1999, month: 9, day: 24 },
				age: null,
				twitter: 'Lilx_zZc',
				youtube: '@k0uh862',
				twitch: 'kxuh_ttv',
				homepage: null
			},
			{
				memberName: 'Suy',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: 2003, month: 10, day: 11 },
				age: null,
				twitter: 'Suy_On_Fire',
				youtube: '@Suy_1203',
				twitch: null,
				homepage: null
			},
			// ▲ 選手
			// ▼ コーチ
			{
				memberName: 'Allice',
				icon: null,
				role: 'Coach',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'GGGallice',
				youtube: null,
				twitch: 'kyarakonn142',
				homepage: null
			}
		]
	},
	{
		divisionName: 'Rainbow Six Siege',
		members: [
			{
				memberName: 'itos0n',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 12, day: 15 },
				age: null,
				twitter: 'itoson1415',
				youtube: null,
				twitch: 'itos0n1415',
				homepage: null
			},
			{
				memberName: 'MeeeL',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 8, day: 16 },
				age: null,
				twitter: 'MeeeL_cc',
				youtube: 'UCRLj16xVlr4nMV-0UauZYHw',
				twitch: 'meeel0816',
				homepage: null
			},
			{
				memberName: 's4kuya3',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 9, day: 11 },
				age: null,
				twitter: 's4kuya3',
				youtube: null,
				twitch: 's4kuya3',
				homepage: null
			},
			{
				memberName: 'しぇりー',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 8, day: 5 },
				age: null,
				twitter: 'ShqIIy',
				youtube: null,
				twitch: 'shellychaaan',
				homepage: null
			},
			{
				memberName: 'かばお',
				icon: null,
				role: 'Player',
				country: 'jp',
				birthday: { year: null, month: 5, day: 13 },
				age: null,
				twitter: 'kabao_8989',
				youtube: null,
				twitch: 'kabao_dayo',
				homepage: null
			}
		]
	},
	{
		divisionName: 'Content Creator',
		members: [
			{
				memberName: 'きゅうりおいしい',
				icon: 'kyuurioisii.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: { year: null, month: 11, day: 11 },
				age: null,
				twitter: 'kyuurioisii333',
				youtube: null,
				twitch: 'kyuurioisii333',
				homepage: 'https://lit.link/kyuurioisii333'
			},
			{
				memberName: 'ささかま',
				icon: 'sskmovo.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: null,
				age: null,
				twitter: 'sskmovo',
				youtube: null,
				twitch: 'nidonesiyoo',
				homepage: 'https://skeb.jp/@sskmovo'
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
				memberName: '翠羽めもり',
				icon: 'suiumemori.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: { year: null, month: 7, day: 22 },
				age: null,
				twitter: 'lO7zZl',
				youtube: '@memori2851',
				twitch: 'lo7zzl',
				homepage: 'https://suiumemori.fanbox.cc/'
			},
			{
				memberName: '魔灰えん',
				icon: 'makaien.webp',
				role: 'Streamer',
				country: 'jp',
				birthday: { year: null, month: 5, day: 5 },
				age: 666.2,
				twitter: 'makaien_vtuber',
				youtube: '@makaien_vtuber',
				twitch: 'makaien_vtuber',
				homepage: 'https://lit.link/makaien'
			},
			{
				memberName: '美作小夜子',
				icon: 'mimasaka.webp',
				role: 'Streamer & Creator',
				country: 'jp',
				birthday: { year: null, month: 7, day: 4 },
				age: null,
				twitter: '345mimasaka',
				youtube: null,
				twitch: '345mimasaka_vt',
				homepage: 'https://lit.link/345mimasaka'
			}
		]
	}
	// {
	// 	divisionName: 'Other',
	// 	members: [
	// 		{
	// 			memberName: 'kishi',
	// 			icon: null,
	// 			role: 'Translator',
	// 			country: 'jp',
	// 			birthday: { year: null, month: 9, day: 2 },
	// 			age: null,
	// 			twitter: 'kishi_krunk',
	// 			youtube: null,
	// 			twitch: null,
	// 			homepage: null
	// 		}
	// 	]
	// },
	// {
	// 	divisionName: 'Operator',
	// 	members: [
	// 		{
	// 			memberName: 'しろねこ',
	// 			icon: '46nek_0.webp',
	// 			role: 'Owner',
	// 			country: 'jp',
	// 			birthday: { year: 2005, month: 3, day: 23 },
	// 			age: null,
	// 			twitter: '46nek_0',
	// 			youtube: null,
	// 			twitch: null,
	// 			homepage: null
	// 		},
	// 		// ▲ 代表
	// 		{
	// 			memberName: '2止',
	// 			icon: 'haineko.webp',
	// 			role: null,
	// 			country: 'jp',
	// 			birthday: { year: 2004, month: 4, day: 7 },
	// 			age: null,
	// 			twitter: 'zitome22',
	// 			youtube: '@zitome2',
	// 			twitch: 'zitome2',
	// 			homepage: null
	// 		},
	// 		{
	// 			memberName: 'Kaz9nnN',
	// 			icon: 'kaz.webp',
	// 			role: null,
	// 			country: 'jp',
	// 			birthday: { year: 2003, month: 4, day: 23 },
	// 			age: null,
	// 			twitter: 'KAZKUN_TSUYOI',
	// 			youtube: null,
	// 			twitch: 'rev_kazkun',
	// 			homepage: null
	// 		},
	// 		{
	// 			memberName: 'Pear',
	// 			icon: 'pear.webp',
	// 			role: null,
	// 			country: 'jp',
	// 			birthday: null,
	// 			age: null,
	// 			twitter: 'pear_fps',
	// 			youtube: null,
	// 			twitch: 'pear_fps',
	// 			homepage: null
	// 		},
	// 		{
	// 			memberName: 'Rinrin.rs',
	// 			icon: 'rinrin.webp',
	// 			role: 'Web Developer',
	// 			country: 'jp',
	// 			birthday: { year: 2006, month: 4, day: 13 },
	// 			age: null,
	// 			twitter: 'Rinrin_2nd',
	// 			youtube: '@rinrin-rs',
	// 			twitch: 'rinrin0413',
	// 			homepage: 'https://rinrin.pages.dev'
	// 		},
	// 		{
	// 			memberName: 'ひなこ',
	// 			icon: null,
	// 			role: null,
	// 			country: 'jp',
	// 			birthday: { year: 2004, month: 10, day: 14 },
	// 			age: null,
	// 			twitter: 'hinakunaiueo',
	// 			youtube: '@hinakox9220',
	// 			twitch: 'hinakoooo_fn',
	// 			homepage: null
	// 		}
	// 	]
	// }
];
