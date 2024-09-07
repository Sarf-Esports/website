<!-- © 2022 REVATI -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { addClassOnVisible } from '$lib/scripts/util';

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
	@use '$lib/stylesheets/reveal_fade_in';
</style>
