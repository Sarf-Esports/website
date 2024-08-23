// © 2022 REVATI

import { writable, type Writable } from 'svelte/store';
import type { GearsAndSettings } from './types';
import { browser } from '$app/environment';
import { toggleScrollPrevention } from '$lib/scripts/util';

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
