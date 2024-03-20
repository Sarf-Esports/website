<!-- © 2022 REVATI -->
<script lang="ts">
	import Contact from './Contact.svelte';
	import HbBtn from './HamburgerButton.svelte';
	import Socials from '../Socials.svelte';
	import LangSwitcher from '../LangSwitcher.svelte';

	import { browser } from '$app/environment';
	import { _ } from 'svelte-i18n';
	import { COPYRIGHT } from '$lib/variables';
	import { toggleScrollPrevention } from '$lib/util';
	import { page } from '$app/stores';

	const ITEMS = ['about', 'news', 'teams', 'store', 'sponsor'];

	$: url = $page.url;
	let currentSection = '';

	if (browser)
		window.addEventListener('scroll', function () {
			if (url !== undefined && url.pathname == '/') {
				let sectionPositions = ITEMS.map((item) => {
					return {
						item,
						relPos:
							document.getElementById(item)!.getBoundingClientRect().top! -
							window.innerHeight * 0.45
					};
				});
				sectionPositions.forEach(({ item, relPos }) => {
					if (relPos < 0) currentSection = item;
				});
				if (0 <= sectionPositions[0].relPos) currentSection = 'top';
			} else {
				currentSection = '';
			}
		});

	let isDrawerMenuOpened = false;

	/** Toggles drawer menu open/close. */
	function toggleDrawerMenu(open: boolean) {
		isDrawerMenuOpened = open;
		toggleScrollPrevention(isDrawerMenuOpened);

		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}
</script>

<div id="header-bg" class:visible={isDrawerMenuOpened} />

<header class:open={isDrawerMenuOpened}>
	<nav>
		<a href="/"
			><img
				src="/images/logos/revati/logo_white.svg"
				alt={$_('header.back')}
				draggable="false"
			/></a
		>
		<ul>
			{#each ITEMS as item}
				<li>
					<a
						href="/#{item}"
						class:active={currentSection == ''
							? url.hash == '#' + item || url.pathname.split('/')[1] == item
							: currentSection == item}
						on:click={() => {
							toggleDrawerMenu(false);
						}}>{item.toUpperCase()}</a
					>
				</li>
			{/each}
			<Contact />
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

<style lang="scss">
	@use '/assets/stylesheets/variables/dimension' as *;
	@use '/assets/stylesheets/variables/color' as *;
	@use '/assets/stylesheets/variables/mixin' as *;

	@use '/assets/stylesheets/header';

	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/Poppins/Poppins-Regular.ttf');
	}

	$vh100: calc($vh001 * 100);
	$border-thickness: 6px;
	$tf-duration: 0.28s;
	$opened_header_height: calc($vh001 * 75);

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
		font-weight: 600;
		letter-spacing: -1px;
		touch-action: none;
		transition: $tf-duration ease-in;

		img {
			height: 62px;
			transition: 0.3s ease-out;
			float: left;
			margin-left: 18px;
			overflow: visible;

			@include pc {
				&:hover {
					transform: translateY(-4px) scale(1.14);
					filter: drop-shadow(0 10px 0 #000000a0);
					transition: 0.3s;
				}
			}

			@include sp {
				margin-top: 16px;
			}
		}

		ul {
			display: flex;
			align-items: center;
			justify-content: right;
			transition: 1s;

			@include sp {
				display: inline-block;
				text-align: left;
				transform: translateY(calc($vh001 * -50));
				padding: 0;
				position: absolute;
				left: calc(50vw - 112px);
				opacity: 0;

				$ul-border-thickness: 4px;

				&::before,
				&::after {
					content: '';
					position: absolute;
					width: 120%;
					height: $ul-border-thickness;
					background-color: $primary-color-darker;
					margin: 0;
				}

				$ul-padding: 4px;

				&::before {
					margin-top: -$ul-padding - $ul-border-thickness;
				}

				&::after {
					margin-top: $ul-padding;
				}
			}

			@include low-height {
				left: calc(50vw - 95px) !important;
			}
		}

		h3 {
			opacity: 0;
			color: white;
			font-size: 17px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			transform: translateY(-86px);
			transition: 0.27s;

			@include pc {
				display: none;
			}
		}

		&.open {
			@include sp {
				top: calc($opened_header_height - $vh100 - $height);

				img {
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

		@include sp {
			width: 100vw;
			height: calc($vh100 - $opened_header_height - $border-thickness + 2px);
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
		@include pc {
			display: none;
		}

		@include sp {
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
