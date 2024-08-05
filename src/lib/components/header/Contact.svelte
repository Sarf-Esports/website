<!-- © 2022 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { toggleScrollPrevention } from '$lib/scripts/util';
	import { _ } from 'svelte-i18n';
	import { SOCIALS } from '$lib/scripts/variables';

	export let isOpened: boolean;

	if (browser) {
		document.addEventListener('keydown', (event) => {
			closeModal(event.key);
		});
	}

	const dispatch = createEventDispatcher();

	/** Toggles the visibility of the contact modal. */
	function toggleContactModal() {
		isOpened = !isOpened;
		dispatch('toggle', { isOpened });
		toggleScrollPrevention(isOpened);
	}

	function closeModal(key: string) {
		if (key == 'Escape' && isOpened) {
			toggleContactModal();
		}
	}

	function empty() {} // eslint-disable-line @typescript-eslint/no-empty-function
</script>

{#if isOpened}
	<div class="modal-bg" on:click={toggleContactModal} on:keypress={empty} role="none" />
	<div class="modal" transition:fly|global={{ y: -64, duration: 240 }}>
		<h1>CONTACT US</h1>
		<p>
			{$_('contact.desc')}<br />
			{$_('contact.note.0')}<br />
			{$_('contact.note.1')}
		</p>
		<div class="mail-btn-container">
			<a href="mailto:{SOCIALS.email}" draggable="false">{$_('contact.button')}</a>
		</div>
		<button on:click={toggleContactModal}>
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
{/if}

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	.modal-bg {
		position: fixed;
		inset: 0;
		background-color: #000000aa;
		z-index: 254;
	}

	$secondary-color: #ccfbff;
	$bloom-color: #63f2ff;

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 358px;
		margin: auto;
		background-color: #122426;
		border: 4px solid $secondary-color;
		padding: 18px 32px;
		border-radius: 6px;
		$bloom-color-large: rgba($bloom-color, 0.08);
		$bloom-color-small: rgba($secondary-color, 0.2);
		filter: drop-shadow(0 0 128px $bloom-color-large) drop-shadow(0 0 28ox $bloom-color-small);
		z-index: 255;

		@include sp {
			filter: drop-shadow(0 0 32px $bloom-color-large) drop-shadow(0 0 14px $bloom-color-small);
		}
	}

	h1 {
		color: $secondary-color;
		font-size: 34px;
		font-weight: 900;
		filter: drop-shadow(0 0 14px rgba($bloom-color, 0.5));

		&::before,
		&::after {
			content: ' - ';
			position: relative;
			top: -2px;
		}
	}

	p {
		display: inline-block;
		font-size: 16px;
		margin: 0 auto;
		margin-bottom: 26px;
		text-align: left;
		white-space: nowrap;
	}

	a {
		$edge-color: #f0fff7;
		$edge-color-dark: #689490;
		display: inline-block;
		color: $edge-color;
		font-size: 19px;
		margin-bottom: 16px;
		padding: 5px 18px;
		padding-bottom: 6px;
		text-decoration: none;
		border: 3px solid $edge-color;
		user-select: none;
		border-radius: 5px;
		transition: 0.2s;

		&:hover {
			background-color: $edge-color;
			color: #191919;
			box-shadow: 0 5px 0 $edge-color-dark;
		}

		&:active {
			box-shadow: 0 1px 0 $edge-color-dark;
			transform: translateY(4px);
		}
	}

	.mail-btn-container {
		display: block;
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
			min-width: initial;
			max-width: 90vw;
			padding: 12px 12px;
			border: 2px solid $secondary-color;
		}

		h1 {
			font-size: 24px;
		}

		p {
			font-size: 11px;
		}

		a {
			font-size: 15px;
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
