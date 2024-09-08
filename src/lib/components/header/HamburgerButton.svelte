<!-- © 2022 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { fly, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { BREAKPOINT_HB } from '$lib/scripts/variables';
	import { toggleScrollPrevention } from '$lib/scripts/util';

	let isHbButtonEnabled: boolean;

	if (browser) {
		let bp = window.matchMedia(BREAKPOINT_HB);

		isHbButtonEnabled = bp.matches;

		window.addEventListener('resize', function () {
			isHbButtonEnabled = bp.matches;
			toggleScrollPrevention(isHbButtonEnabled && isOpened);
		});
	}

	export let isOpened: boolean;

	const dispatch = createEventDispatcher();

	const FLY_OFFSET = 32;
</script>

{#if isHbButtonEnabled}
	<button
		class:is-opened={isOpened}
		on:click={() => {
			isOpened = !isOpened;
			dispatch('toggle', { isOpened });
		}}
		transition:fly|global={{ x: FLY_OFFSET, y: -FLY_OFFSET, duration: 600 }}
	>
		{#key isOpened}
			<span transition:scale|global={{ duration: 300 }}>{isOpened ? 'CLOSE' : 'MENU'}</span>
		{/key}
	</button>
{/if}

<style lang="scss">
	@use '$lib/stylesheets/header/hamburger_btn';
</style>
