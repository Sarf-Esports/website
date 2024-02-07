<!-- © 2022 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { toggle_scroll_prevention } from '$lib/util';
	import { _ } from 'svelte-i18n';
	import { socials, breakpoint } from '$lib/variables';

	let is_contact_modal_visible = false;

	let is_hb_button_enabled: boolean;

	if (browser) {
		document.addEventListener('keydown', function (event) {
			close_modal(event.key);
		});

		let bp = window.matchMedia(breakpoint);

		is_hb_button_enabled = bp.matches;

		window.addEventListener('resize', function () {
			is_hb_button_enabled = bp.matches;
			is_contact_modal_visible = false;
		});
	}

	/** Toggles the visibility of the contact modal. */
	function toggle_contact_modal() {
		is_contact_modal_visible = !is_contact_modal_visible;
		toggle_scroll_prevention(is_contact_modal_visible);
	}

	function close_modal(key: string) {
		if (key == 'Escape' && is_contact_modal_visible) {
			toggle_contact_modal();
		}
	}

	function empty() {} // eslint-disable-line @typescript-eslint/no-empty-function
</script>

{#if !is_hb_button_enabled}
	{#if is_contact_modal_visible}
		<div id="contact-modal-back" on:click={toggle_contact_modal} on:keypress={empty} role="none" />
		<div id="contact-modal" transition:fly|global={{ y: -64, duration: 240 }}>
			<h1>- CONTACT US -</h1>
			<button class="modal-close-btn" on:click={toggle_contact_modal}> &times; </button>
			<p>
				<nobr>{$_('contact.desc')}</nobr><br />
				{$_('contact.note.0')}<br />
				{$_('contact.note.1')}
			</p>
			<a href="mailto:{socials.email}" id="mail-btn" draggable="false">{$_('contact.button')}</a>
		</div>
	{/if}
{/if}

<li>
	<a
		href="mailto:{socials.email}"
		on:click={(self) => {
			// Prevents href
			if (!is_hb_button_enabled) self.preventDefault();
			toggle_contact_modal();
		}}>CONTACT</a
	>
</li>

<style lang="scss">
	@use './assets/stylesheets/header';

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
		font-family: 'Zen Kaku Gothic Antique', sans-serif;
		letter-spacing: initial;
		border-radius: 8px;

		h1 {
			color: $modal-secondary-color;
			font-size: 24px;
			font-weight: bold;
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
			font-weight: 900;
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
			font-weight: bold;
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
