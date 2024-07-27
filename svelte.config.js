// © 2022 REVATI

import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConf from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex(mdsvexConf), vitePreprocess(), preprocess({ sourceMap: true })],

	kit: { adapter: adapter() },

	extensions: ['.svelte', ...mdsvexConf.extensions]
};

export default config;
