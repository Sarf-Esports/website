<!-- © 2022 REVATI -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { closeAllModals } from '$lib/scripts/util';

	export let title: string | null = null;
</script>

<div class="modal" transition:fly|global={{ y: -64, duration: 240 }}>
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
	@use '$lib/stylesheets/variables/mixin' as *;

	$secondary-color: #ccfbff;
	$bloom-color: #63f2ff;

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 358px;
		max-height: 80%;
		margin: auto;
		background-color: #122426;
		border: 4px solid $secondary-color;
		padding: 18px 32px;
		padding-bottom: 34px;
		border-radius: 6px;
		$bloom-color-large: rgba($bloom-color, 0.08);
		$bloom-color-small: rgba($secondary-color, 0.2);
		filter: drop-shadow(0 0 128px $bloom-color-large) drop-shadow(0 0 28ox $bloom-color-small);
		overflow: scroll;
		z-index: 255;

		@include sp {
			filter: drop-shadow(0 0 32px $bloom-color-large) drop-shadow(0 0 14px $bloom-color-small);
		}
	}

	h1 {
		color: $secondary-color;
		font-size: 34px;
		font-weight: 900;
		margin: 16px 0;
		filter: drop-shadow(0 0 14px rgba($bloom-color, 0.5));

		&::before,
		&::after {
			content: ' - ';
			position: relative;
			top: -2px;
		}
	}

	button {
		position: absolute;
		top: 15px;
		right: 16px;
		background: none;
		border: none;
		cursor: pointer;

		&:hover svg {
			fill: #ff6347;
		}
	}

	svg {
		width: 36px;
		height: auto;
		transition: 0.1s;
	}

	@include sp {
		.modal {
			min-width: 224px;
			max-width: 90vw;
			padding: 12px 12px;
			border: 2px solid $secondary-color;
		}

		h1 {
			font-size: 24px;
		}

		button {
			top: 15px;
			right: 13px;
		}

		svg {
			width: 27px;
		}
	}
</style>
