// © 2022 REVATI

// スポンサーの数が増えてギチギチになったら、
// `SponsorBanner.svelte>style>.banner-content` の `width` プロパティの値を調整してください。
// ただし、必ず `200%` 以上にしてください。
//
// スライドの速度を変更したい場合は、
// `SponsorBanner.svelte>style>ul` の `animation` プロパティの値を調整してください。

export const SPONSORS: {
	name: string;
	logo: string;
	website: {
		name: string;
		url: string;
	};
}[] = [
	{
		name: 'ガチサプ',
		logo: 'gachisup_oxipng.png',
		website: {
			name: 'ガチサプ ONLINE STORE',
			url: 'https://gachisup.com'
		}
	}
];
