// © 2022 REVATI

import type { RequestHandler } from './$types';
import { fetchArticles } from '$lib/fetchers';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return json(await fetchArticles());
};
