// © 2022 - 2023 REVATI

// # News 追加する人へ
// 
// 追加するときは以下のフォーマットで追加してください:
// 
// {
//     // true にすると非表示になります
//     is_hidden: false,
// 
//     // 日付は YYYYMMDD の形式で入力してください。同じ日に複数追加するときは日付の末尾でナンバリングしてください。
//     date: '20221128', 
// 
//     // ニュースのタイトル
//     title: 'パンケーキによる侵攻状況'
// }
// 
// また、`./assets/images/news/`配下に上記の `date` と同じ名前でサムネイル画像を追加してください。
// 詳しくは `./assets/images/news/README.md` を参照してください。

export let news_list = [
    {
        is_hidden: false,
        date: '20230121',
        title: 'Sarf Esports リブランディングのお知らせ'
    },
    {
        is_hidden: true,
        date: '20221128',
        title: 'パンケーキによる侵攻状況'
    },
    {
        is_hidden: true,
        date: '202211262',
        title: 'パンケーキ襲来'
    },
    {
        is_hidden: true,
        date: '202211261',
        title: 'Rinrin氏、シェーダーの壊滅に遺憾の意を表明'
    },
    {
        is_hidden: true,
        date: '20221126',
        title: 'ﾃﾞｪｪｪｪｪｪｪｪｪﾝ'
    },
    {
        is_hidden: true,
        date: '20221103',
        title: '当局により検閲されました。'
    }
];
