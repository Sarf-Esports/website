// © 2022 - 2024 REVATI

import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const { default: component, metadata: frontmatter } = await import(`../${params.slug}.md`);
		return { component, frontmatter };
	} catch {
		throw error(404, 'This article is not found');
	}
};
