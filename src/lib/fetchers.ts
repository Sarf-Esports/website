// © 2022 REVATI

import type { ArticleMetadata } from './types';

/** Fetches and sorts all articles. */
export async function fetchArticles() {
	// Fetch all articles.
	let articles = await Promise.all(
		Object.entries(import.meta.glob('/articles/*.md')).map(async ([path, importArticle]) => {
			const { metadata } = (await importArticle()) as { metadata: ArticleMetadata };
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			metadata.slug = path.split('/').pop()!.split('.')[0];
			return metadata;
		})
	);

	// Filtering
	articles = articles.filter((a) => a.published && a.indexed);

	// Sort by newest.
	articles.sort((a, b) => {
		if (a.slug && b.slug) return calcOrder(b.slug) - calcOrder(a.slug);
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
