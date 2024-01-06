<!-- © 2022 - 2024 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { fly, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { breakpoint } from '$lib/variables';
	import { toggle_scroll_prevention } from '$lib/util';

	let is_hb_button_enabled: boolean;

	if (browser) {
		let bp = window.matchMedia(breakpoint);

		is_hb_button_enabled = bp.matches;

		window.addEventListener('resize', function () {
			is_hb_button_enabled = bp.matches;
			toggle_scroll_prevention(is_hb_button_enabled && is_opened);
		});
	}

	export let is_opened: boolean;

	const dispatch = createEventDispatcher();

	const fly_offset = 32;
</script>

{#if is_hb_button_enabled}
	<button
		class:is-opened={is_opened}
		on:click={() => {
			is_opened = !is_opened;
			dispatch('toggle', { is_opened });
		}}
		transition:fly={{ x: fly_offset, y: -fly_offset, duration: 600 }}
	>
		{#key is_opened}
			<span transition:scale={{ duration: 300 }}>{is_opened ? 'CLOSE' : 'MENU'}</span>
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
		$buns-margin: 4px;

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
			font-weight: 800;
			color: $burger-color;

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
