// © 2022 REVATI

import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { GearsAndSettings } from './types';
import { toggleScrollPrevention } from '$lib/scripts/util';

export const isDrawerMenuOpened = writable(false);
isDrawerMenuOpened.subscribe((isOpened) => {
	updateScrollPrevention(isOpened);
	// If don't update the CSS variable `--vh001` here,
	// an incorrect value will be passed on some environments as `--vh001`.
	if (browser) document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
});

export const isContactModalOpened = writable(false);
isContactModalOpened.subscribe(updateScrollPrevention);
export const isFeesModalOpened = writable(false);
isFeesModalOpened.subscribe(updateScrollPrevention);
export const isCoachesModalOpened = writable(false);
isCoachesModalOpened.subscribe(updateScrollPrevention);
export const gearsAndSettingsModalState: Writable<{
	isOpened: boolean;
	content: {
		playerName: string;
		gearsAndSettings: GearsAndSettings;
	} | null;
}> = writable({ isOpened: false, content: null });
gearsAndSettingsModalState.subscribe(({ isOpened }) => updateScrollPrevention(isOpened));

function updateScrollPrevention(v: boolean) {
	if (browser) toggleScrollPrevention(v);
}
