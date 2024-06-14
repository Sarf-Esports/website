<!-- © 2022 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { toggleScrollPrevention } from '$lib/util';
	import { _ } from 'svelte-i18n';
	import { SOCIALS } from '$lib/variables';

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
	<div id="contact-modal-back" on:click={toggleContactModal} on:keypress={empty} role="none" />
	<div id="contact-modal" transition:fly|global={{ y: -64, duration: 240 }}>
		<h1>- CONTACT US -</h1>
		<button class="modal-close-btn" on:click={toggleContactModal}>&times;</button>
		<p>
			<nobr>{$_('contact.desc')}</nobr><br />
			{$_('contact.note.0')}<br />
			{$_('contact.note.1')}
		</p>
		<a href="mailto:{SOCIALS.email}" id="mail-btn" draggable="false">{$_('contact.button')}</a>
	</div>
{/if}

<style lang="scss">
	$modal-secondary-color: #a8f8ff;
	$modal-edge-color: #f0fff7;
	$modal-edge-color-dark: #689490;

	#contact-modal {
		position: fixed;
		inset: 0;
		margin: auto;
		max-width: 320px;
		height: 192px;
		background-color: #122426;
		border: 3px solid $modal-secondary-color;
		padding: 16px;
		z-index: 255;
		letter-spacing: initial;
		border-radius: 8px;

		h1 {
			color: $modal-secondary-color;
			font-size: 24px;
			margin-bottom: 16px;
		}

		p {
			font-size: 12px;
			margin-bottom: 16px;
			text-align: left;
		}

		#mail-btn {
			display: inline-block;
			text-decoration: none;
			border: 3px solid $modal-edge-color;
			color: $modal-edge-color;
			font-size: 16px;
			padding: 4px 10px;
			user-select: none;
			border-radius: 4px;
			transition: 0.3s;
		}

		#mail-btn:hover {
			background-color: $modal-edge-color;
			color: #191919;
			box-shadow: 0 5px 0 $modal-edge-color-dark;
		}

		#mail-btn:active {
			box-shadow: 0 1px 0 $modal-edge-color-dark;
			transform: translateY(4px);
		}

		.modal-close-btn {
			position: absolute;
			top: 4px;
			right: 8px;
			cursor: pointer;
			font-size: 2rem;
			background: none;
			border: none;
			color: inherit;
			font-family: inherit;
			transition: 0.2s;
		}

		.modal-close-btn:hover {
			color: #ff6347;
		}
	}

	#contact-modal-back {
		position: fixed;
		inset: 0;
		background-color: #000000aa;
		z-index: 254;
	}
</style>
