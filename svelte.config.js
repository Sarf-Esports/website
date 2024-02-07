import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvex_conf from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex(mdsvex_conf), vitePreprocess(), preprocess({ sourceMap: true })],

	kit: {
		adapter: adapter(),
		files: { assets: 'assets' }
	},

	extensions: [...mdsvex_conf.extensions]
};

export default config;
