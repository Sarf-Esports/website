<!-- © 2022 REVATI -->
<script lang="ts">
	import HbBtn from './HamburgerButton.svelte';
	import Socials from '../Socials.svelte';
	import LangSwitcher from '../LangSwitcher.svelte';
	import Contact from './Contact.svelte';

	import { browser } from '$app/environment';
	import { HEADER_ITEMS, NON_SECTION_ITEMS } from '$lib/scripts/data/HEADER_ITEMS';
	import { _ } from 'svelte-i18n';
	import { COPYRIGHT } from '$lib/scripts/variables';
	import { toggleScrollPrevention } from '$lib/scripts/util';
	import { isContactModalOpened } from '$lib/scripts/stores';
	import { page } from '$app/stores';

	$: url = $page.url;
	let currentSection = '';

	if (browser) {
		window.addEventListener('scroll', function () {
			if (url !== undefined && url.pathname === '/') {
				let sectionPositions = HEADER_ITEMS.filter((i) => !NON_SECTION_ITEMS.includes(i)).map(
					(item) => {
						return {
							item,
							relPos:
								document.getElementById(item)!.getBoundingClientRect().top! -
								window.innerHeight * 0.45
						};
					}
				);
				sectionPositions.forEach(({ item, relPos }) => {
					if (relPos < 0) currentSection = item;
				});
				if (0 <= sectionPositions[0].relPos) currentSection = 'top';
			} else {
				currentSection = '';
			}
		});
	}

	let isDrawerMenuOpened = false;

	/**
	 * Toggles drawer menu open/close.
	 *
	 * **＊ Must be called in the browser environment.**
	 */
	function toggleDrawerMenu(open: boolean) {
		isDrawerMenuOpened = open;
		toggleScrollPrevention(isDrawerMenuOpened);

		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}
</script>

<div id="header-bg" class:visible={isDrawerMenuOpened} />

<header class:open={isDrawerMenuOpened}>
	<nav>
		<a href="/" draggable="false"><span title={$_('header.back')} /></a>
		<ul>
			{#each HEADER_ITEMS as item}
				{#if item === 'contact'}
					<li class="item-contact">
						<button class:active={false} on:click={() => isContactModalOpened.update(() => true)}
							>CONTACT</button
						>
					</li>
				{:else}
					<li>
						<a
							href="/#{item}"
							class:active={currentSection === ''
								? url.hash === '#' + item || url.pathname.split('/')[1] === item
								: currentSection === item}
							on:click={() => {
								toggleDrawerMenu(false);
							}}>{item.toUpperCase()}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
		<h3>{COPYRIGHT}</h3>
		<HbBtn
			isOpened={isDrawerMenuOpened}
			on:toggle={(e) => {
				toggleDrawerMenu(e.detail.isOpened);
			}}
		/>
	</nav>
</header>

<div id="header2" class:open={isDrawerMenuOpened}>
	<div class="socials">
		<Socials
			showEmail
			style="
			justify-content: left;
			margin-top: 5vh;
			margin-left: 5vh;
			margin-bottom: calc(13vh - 56px);
		"
		/>
	</div>
	<div class="lang-switcher"><LangSwitcher /></div>
</div>

<Contact />

<style lang="scss">
	@use '$lib/stylesheets/variables/dimension' as *;
	@use '$lib/stylesheets/variables/color' as *;
	@use '$lib/stylesheets/variables/mixin' as *;

	$vh100: calc($vh001 * 100);
	$border-thickness: 6px;
	$tf-duration: 0.28s;
	$opened-header-height: calc($vh001 * 75);

	header {
		$height: 88px;

		position: fixed;
		top: calc($vh001 * -100);
		z-index: 253;
		background-color: $primary-color;
		width: 100%;
		height: $height;
		box-shadow: 0 0 10px 0 black;
		border-top: $vh100 solid $primary-color;
		border-bottom: $border-thickness solid $primary-color-darker-2;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		letter-spacing: -1px;
		touch-action: none;
		transition: $tf-duration ease-in;

		span {
			background-image: url('/images/logos/revati/logo_white.svg');
			background-size: contain;
			width: 66px;
			height: 62px;
			float: left;
			margin-left: 18px;
			$transition: 0.3s ease-out;
			transition:
				transform $transition,
				filter $transition,
				opacity $transition;
			overflow: visible;

			@include pc {
				&:hover {
					transform: translateY(-4px) scale(1.14);
					filter: drop-shadow(0 10px 0 #000000a0);
				}
			}

			@include hb {
				margin-top: 16px;
			}

			@include wide-width {
				background-image: url('/images/logos/revati/title_full-without-slogan.webp');
				width: 226px;

				&:hover {
					transform: translateY(-5px) scale(1.1);
				}
			}
		}

		ul {
			display: flex;
			align-items: center;
			justify-content: right;
			transition: 1s;

			$ul-border-thickness: 4px;

			@include hb {
				display: inline-block;
				text-align: left;
				transform: translateY(calc($vh001 * -48));
				padding: 0;
				position: absolute;
				left: calc(50vw - 112px);
				opacity: 0;

				&::before,
				&::after {
					content: '';
					position: absolute;
					width: 120%;
					height: $ul-border-thickness;
					background-color: $primary-color-darker;
					margin: 0;
				}

				$ul-padding: 14px;

				&::before {
					margin-top: -$ul-padding - $ul-border-thickness;
				}

				&::after {
					margin-top: $ul-padding;
				}
			}

			@include low-height {
				left: calc(50vw - 99px) !important;

				$ul-padding: 4px;

				&::before {
					margin-top: -$ul-padding - $ul-border-thickness;
				}

				&::after {
					margin-top: $ul-padding;
				}
			}
		}

		h3 {
			opacity: 0;
			color: white;
			font-family: 'Zen Kaku Gothic New', sans-serif;
			font-weight: 900;
			font-size: 17px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			transform: translateY(-86px);
			letter-spacing: 0.4px;
			transition: 0.27s;

			@include not-hb {
				display: none;
			}
		}

		&.open {
			@include hb {
				top: calc($opened-header-height - $vh100 - $height);

				span {
					transform: translateY(calc($vh001 * -86));
					opacity: 0;
				}

				ul {
					opacity: 1;
				}

				h3 {
					opacity: 0.5;
					transform: none;
				}
			}
		}
	}

	li {
		list-style: none;
		margin: 10px 12px 2px 10px;

		&:last-child {
			margin-right: 2.6em;
		}

		a,
		button {
			font-family: inherit;
			background: none;
			border: none;
			padding: 0;
			letter-spacing: inherit;
			cursor: pointer;
			color: white;
			font-size: 28px;
			text-decoration: none;
			opacity: 0.7;
			transition: 0.3s;

			&:hover {
				opacity: 1;
			}

			&::after {
				content: '';
				display: block;
				border-bottom: 2px solid white;
				margin: 0 auto;
				transform: scaleX(0);
				opacity: 0.8;
				transition: 0.2s;
			}

			&:hover,
			&.active {
				&::after {
					transform: scaleX(112%);

					@include hb {
						transform: scaleX(0);
					}
				}
			}
		}

		@include low-height {
			@include hb {
				margin: 4px 12px 0px 10px;

				a,
				button {
					font-size: 24px;
				}
			}
		}
	}

	.item-contact {
		margin-right: 2.6em;
	}

	#header2 {
		position: fixed;
		bottom: 0;
		left: 0;
		transform: translateX(101vw);
		$header2-primary-col: #122a33;
		background-color: $header2-primary-col;
		border-right: 50vw solid $header2-primary-col;
		border-left: $border-thickness solid $primary-color-darker-2;
		transition: $tf-duration ease-in;

		@include hb {
			width: 100vw;
			height: calc($vh100 - $opened-header-height - $border-thickness + 2px);
			z-index: 253;

			&.open {
				transform: none;

				.socials {
					transform: scale(1);
					transition-delay: $tf-duration;
				}
			}
		}

		.socials {
			transform: scale(0);
		}

		.lang-switcher {
			float: right;
			margin-right: 32px;
		}
	}

	#header-bg {
		display: none;

		@include hb {
			display: initial;
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: $vh100;
			background-color: #000000a0;
			transform: scale(0);
			z-index: 252;

			&.visible {
				transform: scale(1);
				transition-delay: $tf-duration;
			}
		}
	}
</style>
