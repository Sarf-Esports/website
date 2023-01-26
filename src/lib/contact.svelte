<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { toggle_scroll_prevention } from '$lib/util.js';
	import { socials, breakpoint } from '$lib/variables.js';

	let is_contact_modal_visible = false;

	/** @type {boolean} */
	let is_hb_button_enabled;

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

	/**
	 * Toggles the visibility of the contact modal.
	 */
	function toggle_contact_modal() {
		is_contact_modal_visible = !is_contact_modal_visible;
		toggle_scroll_prevention(is_contact_modal_visible);
	}

	/**
	 * @param {string} key
	 */
	function close_modal(key) {
		if (key == 'Escape' && is_contact_modal_visible) {
			toggle_contact_modal();
		}
	}
</script>

{#if !is_hb_button_enabled}
	{#if is_contact_modal_visible}
		<div id="contact-modal-back" on:click={toggle_contact_modal} on:keypress={() => {}} />
		<div id="contact-modal" transition:fly={{ y: -64, duration: 240 }}>
			<h1>- CONTACT US -</h1>
			<span class="modal-close-btn" on:click={toggle_contact_modal} on:keypress={() => {}}>
				&times;
			</span>
			<p>
				<nobr>チームに関するお問い合わせはこちらからお願い致します。</nobr><br />
				※返答までにお時間をいただく場合がございます。<br />
				※お答えできない場合がございます。
			</p>
			<a
				href={socials.email}
				id="mail-btn"
				target="_blank"
				rel="noopener noreferrer"
				draggable="false">メールを送る</a
			>
		</div>
	{/if}
{/if}

<li>
	<a
		href={socials.email}
		on:click={(self) => {
			// Prevents href
			if (!is_hb_button_enabled) self.preventDefault();

			toggle_contact_modal();
		}}
		target="_blank"
		rel="noopener noreferrer">CONTACT</a
	>
</li>

<style lang="scss">
	@import './assets/stylesheets/header.scss';

	$modal-secondary-color: #e9ffa7;
	$modal-edge-color: #fff9ee;
	$modal-edge-color-dark: #cfb27a;

	#contact-modal {
		position: fixed;
		inset: 0;
		margin: auto;
		max-width: 320px;
		height: 192px;
		background-color: #202512;
		border: 3px solid $modal-secondary-color;
		padding: 16px;
		z-index: 255;
		font-family: 'Zen Kaku Gothic Antique', sans-serif;
		letter-spacing: initial;

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
