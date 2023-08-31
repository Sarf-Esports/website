// © 2022 - 2023 REVATI

import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const default_locale = 'ja';

register('ja', () => import('./locales/ja.json'));
register('en', () => import('./locales/en.json'));
register('ko', () => import('./locales/ko.json'));

init({
	fallbackLocale: default_locale,
	initialLocale: browser ? window.navigator.language : default_locale
});
