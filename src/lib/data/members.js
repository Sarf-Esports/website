// © 2022 - 2023 REVATI

// # メンバーを追加する人へ
// 
// 追加するときは以下のフォーマットで追加してください:
// 
// {
//     // メンバーの名前
//     // null にはしないこと。あとあんまり長くしないでね^^;
//     "name": "Rinrin.rs",
// 
//     // メンバーのアイコン画像のファイル名
//     // `/assets/images/members/` 配下に置く画像ファイルの名前を指定してください
//     // ただ単にアイコンが無い人や著作権の問題で貼れない人は `null` にして
//     "icon": "rinrin.png",
// 
//     // メンバーの Twitter アカウントID (アットマークはつけないで)
//     // ない場合は `null` にしてください
//     "twitter": "rinrin_2nd",
// 
//     // メンバーの YouTubeチャンネルID
//     // `@rinrin-rs` みたいな感じか `UCb3U3ovwzmagTBuzkdrsJkQ` みたいな形式で指定してください
//     // ない場合は `null` にしてください
//     "youtube": "@rinrin-rs",
// 
//     // メンバーの TwitchアカウントID (アットマークはつけないで)
//     // ない場合は `null` にしてください
//     "twitch": "rinrin0413"
// }
// 
// 並びは名前の `数字順 -> アルファベット順 -> 五十音順 -> その他(ここまで着たら追加順)` でお願いします。
// また、メンバーのアイコン画像を指定した場合は `/assets/images/members/` 配下に置くのを忘れないでください。

export let member_lists = [
    {
        "kind": "fortnite",
        "list": [
            {
                "name": "Retchiri",
                "icon": null,
                "twitter": "retchiri1",
                "youtube": null,
                "twitch": null
            },
            {
                "name": "さっさ",
                "icon": "sassa.webp",
                "twitter": "sassa_FN",
                "youtube": "@user-kr5gz2li1y",
                "twitch": null
            },
            {
                "name": "のあ",
                "icon": null,
                "twitter": "NOAHhhhhh156",
                "youtube": "@noahdayo",
                "twitch": null
            },
            {
                "name": "ぺな",
                "icon": "pena.webp",
                "twitter": "Penaclip",
                "youtube": null,
                "twitch": null
            },
            {
                "name": "ぼひ",
                "icon": "bohi.webp",
                "twitter": "WilyGuysBohi",
                "youtube": "@user-yf4gf8qw8s",
                "twitch": null
            }
        ]
    },
    {
        "kind": "apex",
        "list": [{
            "name": "K0xh",
            "icon": "k0xh.webp",
            "twitter": "Lilx_zZc",
            "youtube": "@k0uh862",
            "twitch": "k0xh_"
        },
        {
            "name": "Pear",
            "icon": "pear.webp",
            "twitter": "pear_fps",
            "youtube": null,
            "twitch": "pear_fps"
        },
        {
            "name": "キムにぃ",
            "icon": "kimunii.webp",
            "twitter": "kimunii017",
            "youtube": null,
            "twitch": "kimunii0119"
        },
        {
            "name": "シロラ",
            "icon": "sirora.webp",
            "twitter": "sirora_46pq",
            "youtube": null,
            "twitch": "sirora_46pq"
        },
        {
            "name": "変なお兄さん",
            "icon": "henna_onisan.webp",
            "twitter": "hennaOnisaN6",
            "youtube": null,
            "twitch": "jp_hennaonisan "
        }]
    },
    {
        "kind": "minecraft",
        "list": [{
            "name": "GEN3987",
            "icon": "gen.webp",
            "twitter": "GEN3987",
            "youtube": "@GEN3987",
            "twitch": "gen3987"
        },
        {
            "name": "RetoRuto9900K",
            "icon": "retoruto.webp",
            "twitter": "tutinoko_kusaa",
            "youtube": "@reto9900k",
            "twitch": null
        },
        {
            "name": "Rinrin.rs",
            "icon": "rinrin.webp",
            "twitter": "Rinrin_2nd",
            "youtube": "@rinrin-rs",
            "twitch": "rinrin0413"
        },
        {
            "name": "がすたー",
            "icon": "gaster.webp",
            "twitter": "Gaster_EX",
            "youtube": "@gaster_ch1425",
            "twitch": null
        },
        {
            "name": "バード",
            "icon": "bird.webp",
            "twitter": "bird132297",
            "youtube": "@-bird-bird-bird-",
            "twitch": null
        },
        {
            "name": "リョウマ",
            "icon": "ryoma.webp",
            "twitter": "Ryoma_Gaming_MC",
            "youtube": "@RyomaGaming_MC",
            "twitch": null
        },
        {
            "name": "ルイル",
            "icon": "ruilu.webp",
            "twitter": "Ruilu_Adora",
            "youtube": "@Ruilu_Adora",
            "twitch": null
        }]
    },
    {
        "kind": "streamer",
        "list": [{
            "name": "らいふれっくす",
            "icon": "lifelex.webp",
            "twitter": "Lifelex57",
            "youtube": "@Lifelex",
            "twitch": null
        },
        {
            "name": "りあ",
            "icon": "ria.webp",
            "twitter": "Ria1fn",
            "youtube": "@Ria1fn",
            "twitch": null
        }]
    }
];
