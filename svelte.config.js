import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvex_conf from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), preprocess({ sourceMap: true }), mdsvex(mdsvex_conf)],

	kit: {
		adapter: adapter(),
		files: { assets: 'assets' }
	},

	extensions: [...mdsvex_conf.extensions]
};

export default config;
