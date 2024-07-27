<!-- © 2022 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { fly, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { BREAKPOINT } from '$lib/scripts/variables';
	import { toggleScrollPrevention } from '$lib/scripts/util';

	let isHbButtonEnabled: boolean;

	if (browser) {
		let bp = window.matchMedia(BREAKPOINT);

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
	@use 'sass:math';

	button {
		$size: 58px;
		$btn-offset: math.div(88px, 2) - math.div($size, 2);
		$bg-default: #1f4b51;
		$bg-dark: #13353a;
		$border-light: #38717a;
		$border-dark: #092b2f;
		$font-size: 12px;
		$burger-color: #a3f7ff;
		$buns-margin: 3px;

		display: block;
		position: fixed;
		top: $btn-offset;
		right: $btn-offset + 12px;
		width: $size;
		height: $size;
		background-color: $bg-default;
		border-style: solid;
		border-width: 4px;
		border-color: $border-light;
		cursor: pointer;
		border-radius: 8px;
		transition: 0.18s;

		&:hover {
			filter: brightness(1.1) saturate(0.7);
			transform: scale(112%);
			transition: 0.3s;
		}

		&:active {
			filter: brightness(1.12) saturate(1.12);
			transform: scale(96%);
		}

		&.is-opened {
			top: $btn-offset + 4px;
			background: $bg-dark;
			border-color: $border-dark;

			span {
				&:before,
				&:after {
					opacity: 0.3;
				}

				$offset-y: 13.5px;

				&:before {
					transform: translateY($offset-y) rotate(45deg);
				}

				&:after {
					transform: translateY(-$offset-y) rotate(-45deg);
				}
			}
		}

		span {
			$buns-thickness: 2px;

			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: $font-size;
			font-family: 'Zen Kaku Gothic New', sans-serif;
			font-weight: 900;
			color: $burger-color;
			letter-spacing: 0.4px;

			&:before,
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: $buns-thickness;
				margin: $buns-margin 0;
				background-color: $burger-color;
			}
		}
	}
</style>
