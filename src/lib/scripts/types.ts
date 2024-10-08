// © 2022 REVATI

export interface ArticleMetadata {
	redirect?: string;
	published: boolean;
	indexed: boolean;
	title: string;
	slug?: string;
}

export interface ArticleThumbnailImgFmts {
	[slug: string]: string;
}

export interface GearsAndSettings {
	avatar: string;
	dpi: number;
	sens: number | { role: string; value: number }[];
	mouse: string;
	mousepad: string;
	keyboard: string;
	crosshairSettings: {
		type: string | null;
		showsAccuracy: boolean | null;
		color: string;
		thickness: number | null;
		rotation: number | null;
		crosshairLength: number | null;
		centerGap: number | null;
		opacity: number | null;
		outline: {
			color: string;
			opacity: number;
			thickness: number;
			shift: number;
		};
		dot: {
			type: string;
			size: number;
			opacity: number;
		};
		scaleWithResolution: boolean;
	}[];
}
