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
