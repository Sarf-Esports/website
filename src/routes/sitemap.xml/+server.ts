// © 2022 REVATI

import type { RequestHandler } from './$types';
import { fetchArticles } from '$lib/scripts/fetchers';
import { SITE_URL } from '$lib/scripts/variables';

export const prerender = true;

export const GET: RequestHandler = async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=0, s-maxage=86400',
		'Content-Type': 'application/xml; charset=utf-8'
	});
	return new Response(await body());
};

async function body() {
	const articles = (await fetchArticles())
		.map((article) => {
			const slug = article.slug?.string;
			return `<url>
        <loc>${SITE_URL}/news/articles/${slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
		})
		.join('\n    ');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${SITE_URL}</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${SITE_URL}/news</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${SITE_URL}/privacy</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    ${articles}
</urlset>`;
}
