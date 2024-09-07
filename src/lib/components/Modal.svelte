<!-- © 2022 REVATI -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { closeAllModals } from '$lib/scripts/util';

	export let title: string | null = null;
	/**
	 * The minimum width of the modal. (`px`)
	 *
	 * But it will be `100vw - 29px` if it is bigger than `100vw - 29px`.
	 */
	export let minWidth: number = 358;
	/** Whether the modal does not have a bloom effect. */
	export let doesNotHaveBloom: boolean = false;
</script>

<div
	class="modal"
	class:no-bloom={doesNotHaveBloom}
	style="min-width: min({minWidth}px, 100vw - 29px);"
	transition:fly|global={{ y: -64, duration: 240 }}
>
	{#if title !== null}
		<h1>{title}</h1>
	{/if}
	<slot />
	<button on:click={closeAllModals}>
		<!--
			Google Material Symbols and Icons - Close
			https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close:FILL@0;wght@400;GRAD@200;opsz@24&icon.query=close&icon.size=24&icon.color=%23e8eaed
			This icon is licensed under the Apache License Version 2.0: https://github.com/google/material-design-icons/blob/master/README.md
		-->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#e8eaed"
			><path
				d="m252-176-74-76 227-228-227-230 74-76 229 230 227-230 74 76-227 230 227 228-74 76-227-230-229 230Z"
			/></svg
		>
	</button>
</div>

<style lang="scss">
	@use '$lib/stylesheets/modal';
</style>
