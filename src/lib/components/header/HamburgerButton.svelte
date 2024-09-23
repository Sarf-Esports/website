<!-- © 2022 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { fly, scale } from 'svelte/transition';
	import { BREAKPOINT_HB } from '$lib/scripts/variables';
	import { toggleScrollPrevention } from '$lib/scripts/util';
	import { isDrawerMenuOpened } from '$lib/scripts/stores';

	let isHbButtonEnabled: boolean;

	if (browser) {
		let bp = window.matchMedia(BREAKPOINT_HB);

		isHbButtonEnabled = bp.matches;

		window.addEventListener('resize', function () {
			isHbButtonEnabled = bp.matches;
			toggleScrollPrevention(isHbButtonEnabled && $isDrawerMenuOpened);
		});
	}

	const FLY_OFFSET = 32;
</script>

{#if isHbButtonEnabled}
	<button
		class:is-opened={$isDrawerMenuOpened}
		on:click={() => isDrawerMenuOpened.update((v) => !v)}
		transition:fly|global={{ x: FLY_OFFSET, y: -FLY_OFFSET, duration: 600 }}
	>
		{#key $isDrawerMenuOpened}
			<span transition:scale|global={{ duration: 300 }}>{$isDrawerMenuOpened ? 'CLOSE' : 'MENU'}</span>
		{/key}
	</button>
{/if}

<style lang="scss">
	@use '$lib/stylesheets/header/hamburger_btn';
</style>
