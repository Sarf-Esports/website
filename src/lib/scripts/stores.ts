// © 2022 REVATI

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { toggleScrollPrevention } from '$lib/scripts/util';

export const isContactModalOpened = writable(false);
isContactModalOpened.subscribe((value) => {
	if (browser) toggleScrollPrevention(value);
});
