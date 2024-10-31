// © 2022 REVATI

import type { PageLoad } from './$types';
import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/scripts/types';
import { reconstructIdsOfArticleMetadata } from '$lib/scripts/util';

export const load: PageLoad = async ({
	fetch
}): Promise<{
	articles: ArticleMetadata[];
	thumbnailImgFmts: ArticleThumbnailImgFmts;
}> => {
	const articles = reconstructIdsOfArticleMetadata(await (await fetch('/api/articles')).json());
	const thumbnailImgFmts = await (await fetch('/api/articles/thumbnail-imgs')).json();
	return { articles, thumbnailImgFmts };
};
