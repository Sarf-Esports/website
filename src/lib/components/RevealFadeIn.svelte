<!-- © 2022 REVATI -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { addClassOnVisible } from '$lib/util';

	let effect: HTMLElement;

	onMount(fadeIn);
	if (browser) window.addEventListener('scroll', fadeIn);

	/** **＊ Must be called in the browser environment.** */
	function fadeIn() {
		addClassOnVisible(effect, 'active');
	}
</script>

<div class="effect" class:active={false} bind:this={effect}>
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;

	$delay: 0.5s;

	// All animations are completely finished after $duration*2 seconds
	$duration: 0.3s;

	$first-point: polygon(0 0, 0 0, 0 100%, 0% 100%);
	$middle-point: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	$last-point: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);

	.effect {
		position: relative;
		overflow: hidden;

		&.active::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $primary-color;
			clip-path: $first-point;
			animation:
				fill $duration forwards $delay,
				empty $duration forwards $duration + $delay;

			@keyframes fill {
				0% {
					clip-path: $first-point;
				}

				100% {
					clip-path: $middle-point;
				}
			}

			@keyframes empty {
				0% {
					clip-path: $middle-point;
				}

				100% {
					clip-path: $last-point;
				}
			}
		}
	}

	.container {
		opacity: 0;
	}

	.active .container {
		opacity: 1 !important;
		transition-delay: $duration + $delay;
	}
</style>
