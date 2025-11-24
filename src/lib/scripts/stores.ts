import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import { updateVh001 } from '$lib/scripts/util';
import { toggleScrollPrevention } from '$lib/scripts/util';

export const isDrawerMenuOpened = writable(false);
isDrawerMenuOpened.subscribe((isOpened) => {
	updateScrollPrevention(isOpened);
	// If don't update the CSS variable `--vh001` here,
	// an incorrect value will be passed on some environments as `--vh001`.
	if (browser) updateVh001();
});

export const isHamburgerButtonEnabled = writable(false);

export const isContactModalOpen = writable(false);
isContactModalOpen.subscribe((isOpen) => updateScrollPrevention(isOpen || get(isDrawerMenuOpened)));
export const isFeesModalOpen = writable(false);
isFeesModalOpen.subscribe(updateScrollPrevention);
export const isCoachesModalOpen = writable(false);
isCoachesModalOpen.subscribe(updateScrollPrevention);
export const isGearsAndSettingsModalOpen = writable(false);
isGearsAndSettingsModalOpen.subscribe(updateScrollPrevention);

function updateScrollPrevention(v: boolean) {
	if (browser) toggleScrollPrevention(v);
}
