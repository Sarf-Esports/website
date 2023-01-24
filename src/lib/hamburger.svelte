<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';
	import { fly, scale } from 'svelte/transition';

	/** @type {boolean} */
	let is_hb_button_enabled;

	if (browser) {
		let bp = window.matchMedia('(max-width: 850px)');

		is_hb_button_enabled = bp.matches;

		window.addEventListener('resize', function () {
			is_hb_button_enabled = bp.matches;
		});
	}

	let is_opened = false;

	const fly_offset = 32;
</script>

{#if is_hb_button_enabled}
	<button
		class:is-opened={is_opened}
		on:click={() => (is_opened = !is_opened)}
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
		$bg-default: #445220;
		$bg-dark: #303b13;
		$border-light: #667938;
		$border-dark: #253009;
		$font-size: 12px;
		$burger-color: #e8ffa4;
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
		// DEBUG:
		// border-top-color: $border-light;
		// border-left-color: $border-light;
		// border-bottom-color: $border-dark;
		// border-right-color: $border-dark;
		cursor: pointer;
		transition: .18s;

		&:hover {
			filter: brightness(1.2) saturate(1.2);
			transform: scale(112%);
			transition: .3s;
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
					$clip-point: 20%;
					$lg: $burger-color 0%, $burger-color $clip-point, transparent $clip-point, transparent 100%;
					background: linear-gradient(to left, $lg), linear-gradient(to right, $lg);
				}

				$offset-y: 13.5px;
				$scale: 1.4;

				&:before {
					transform: translateY($offset-y) scale($scale) rotate(45deg);
				}

				&:after {
					transform: translateY(-$offset-y) scale($scale) rotate(-45deg);
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
