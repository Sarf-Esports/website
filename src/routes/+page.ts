import type { PageLoad } from './$types';
import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/scripts/types';
import { reconstructIdsOfArticleMetadata } from '$lib/scripts/util';

export const load: PageLoad = async ({
	fetch,
	url
}): Promise<{
	articles: ArticleMetadata[];
	thumbnailImgFmts: ArticleThumbnailImgFmts;
	division: string | null;
}> => {
	const articles: ArticleMetadata[] = reconstructIdsOfArticleMetadata(
		await (await fetch('/api/articles')).json()
	);
	const thumbnailImgFmts = await (await fetch('/api/articles/thumbnail-imgs')).json();

	const division = url.searchParams.get('div');

	return { articles, thumbnailImgFmts, division };
};
