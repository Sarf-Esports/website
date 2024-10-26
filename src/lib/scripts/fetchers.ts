// © 2022 REVATI

import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/scripts/types';

const ARTICLES = import.meta.glob('/articles/[0-9][0-9][0-9][0-9]/([1-9]|1[0-2])/*.md');

/** Fetches and sorts articles. */
export async function fetchArticles() {
	// Fetch all articles.
	let articles = await Promise.all(
		Object.entries(ARTICLES).map(async ([path, importArticle]) => {
			const { metadata } = (await importArticle()) as { metadata: ArticleMetadata };
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			metadata.slug = path.split('/').pop()!.split('.')[0];
			return metadata;
		})
	);

	// Filtering
	articles = articles.filter((a) => a.redirect === undefined && a.published && a.indexed);

	// Sort by newest.
	articles.sort((a, b) => {
		if (typeof a.slug === 'string' && typeof b.slug === 'string')
			return calcOrder(b.slug) - calcOrder(a.slug);
		// unreachable
		return 0;
	});

	return articles;
}

function calcOrder(slug: string) {
	let n = parseInt(slug.split('_')[0]);
	// It is alignment for slugs without numbering.
	n *= n < 100000000 ? 100 : 1;
	return n;
}

/** Returns the file formats of the each article's thumbnail images (articles without thumbnail images will not be listed). */
export async function fetchThumbnailImgFmt() {
	const thumbnailImgs = Object.keys(import.meta.glob(`/static/images/news/thumbnails/*.*`)).map(
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		(path) => path.split('/').pop()!
	);
	return (await Promise.all(Object.keys(ARTICLES))).reduce(
		(acc: ArticleThumbnailImgFmts, path) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const slug = path.split('/').pop()!.split('.')[0];
			for (const img of thumbnailImgs) {
				const [name, fmt] = img.split('.');
				if (name === slug) acc[slug] = fmt;
			}
			return acc;
		},
		{}
	);
}
