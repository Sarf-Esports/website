// © 2022 - 2023 REVATI

// # News 追加する人へ
//
// 追加するときは以下のフォーマットで追加してください:
//
// {
//     // false にすると非表示になります
//     published: true,
//
//     // 日付は YYYYMMDD の形式で入力してください。同じ日に複数追加するときは日付の末尾でナンバリングしてください。
//     date: '20221128',
//
//     // ニュースのタイトル
//     title: 'パンケーキによる侵攻状況'
// }
//
// また、`/assets/images/news/`配下に上記の `date` と同じ名前でサムネイル画像を追加してください。
// 詳しくは `/assets/images/news/README.md` を参照してください。
//
// 本文は `/src/routes/news/article/{date}.md` に記載してください。
// 細かい書き方は `/src/routes/news/article/20230206_test.md` を参照してください。

export const news_list = [
	{
		published: true,
		date: '202303152',
		title: '新部門設立と新メンバー加入のお知らせ'
	},
	{
		published: true,
		date: '202303151',
		title: 'Fortnite部門に新たに1名のメンバーが加入'
	},
	{
		published: true,
		date: '20230225',
		title: '部門移籍と新メンバー加入のお知らせ'
	},
	{
		published: true,
		date: '20230220',
		title: '1名のメンバーが脱退'
	},
	{
		published: true,
		date: '202301212',
		title: '計5名のメンバーが新たに加入'
	},
	{
		published: true,
		date: '20230121',
		title: 'Sarf Esports リブランディングのお知らせ'
	},
	{
		published: false,
		date: '20221128',
		title: 'パンケーキによる侵攻状況'
	},
	{
		published: false,
		date: '202211262',
		title: 'パンケーキ襲来'
	},
	{
		published: false,
		date: '202211261',
		title: 'Rinrin氏、シェーダーの壊滅に遺憾の意を表明'
	},
	{
		published: false,
		date: '20221126',
		title: 'ﾃﾞｪｪｪｪｪｪｪｪｪﾝ'
	},
	{
		published: false,
		date: '20221103',
		title: '当局により検閲されました。'
	}
];
