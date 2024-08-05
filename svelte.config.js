// © 2022 REVATI

import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConf from './mdsvex.config.js';

const CLOUDFLARE_ROUTES_EXCLUDE = [
	// ▼ Build Artifacts ▼
	'<build>',

	// ▼ Static Assets ▼
	// "<files>",
	'/favicon.ico',
	'/images/*',
	'/scripts/*',

	// ▼ Pre-rendered Pages ▼
	// "<prerendered>",
	'/api/articles/thumbnail-imgs',
	'/sitemap.xml',
	'/robots.txt'
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex(mdsvexConf), vitePreprocess(), preprocess({ sourceMap: true })],

	kit: { adapter: adapter({ routes: { exclude: CLOUDFLARE_ROUTES_EXCLUDE } }) },

	extensions: ['.svelte', ...mdsvexConf.extensions]
};

export default config;
