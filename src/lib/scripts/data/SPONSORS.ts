// © 2022 REVATI

// スポンサーの数が増えてギチギチになったら、
// `SponsorBanner.svelte>style` タグ内の `$interval-on-wide` 変数や `$interval-on-narrow` 変数を調整してください。
//
// スライドの速度を変更したい場合は、
// `$duration-on-wide` 変数や `$duration-on-narrow` 変数を調整してください。

export const SPONSORS: {
	name: string;
	url: string;
	logo: string;
}[] = [
	{
		name: 'XENOVA',
		url: 'https://xenova.shop',
		logo: 'xenova.webp'
	},
	{
		name: 'Undercade',
		url: 'https://undercade.official.ec',
		logo: 'undercade_white-bg.webp'
	}
];
