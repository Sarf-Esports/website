// © 2022 REVATI

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { toggleScrollPrevention } from '$lib/scripts/util';

export const isContactModalOpened = writable(false);
isContactModalOpened.subscribe(updateScrollPrevention);
export const isFeesModalOpened = writable(false);
isFeesModalOpened.subscribe(updateScrollPrevention);
export const isCoachesModalOpened = writable(false);
isCoachesModalOpened.subscribe(updateScrollPrevention);

function updateScrollPrevention(v: boolean) {
	if (browser) toggleScrollPrevention(v);
}
