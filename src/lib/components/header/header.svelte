<!-- © 2022 REVATI -->
<script lang="ts">
	import Contact from './contact.svelte';
	import HbBtn from './hamburger_button.svelte';
	import Socials from '../socials.svelte';
	import LangSwitcher from '../lang_switcher.svelte';

	import { COPYRIGHT } from '$lib/variables';
	import { toggleScrollPrevention } from '$lib/util';

	let is_drawer_menu_opened = false;

	let items = ['about', 'news', 'teams', 'store', 'sponsor'];

	/** Toggles drawer menu open/close. */
	function toggle_drawer_menu(open: boolean) {
		is_drawer_menu_opened = open;
		toggleScrollPrevention(is_drawer_menu_opened);

		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}
</script>

<div id="header-bg" class:visible={is_drawer_menu_opened} />

<header class:open={is_drawer_menu_opened}>
	<nav>
		<a href="/"><img src="/images/logos/revati/logo_white.svg" alt="logo" draggable="false" /></a>
		<ul>
			{#each items as item}<li>
					<a
						href="/#{item}"
						on:click={() => {
							toggle_drawer_menu(false);
						}}>{item.toUpperCase()}</a
					>
				</li>{/each}
			<Contact />
		</ul>
		<h3>{COPYRIGHT}</h3>
		<HbBtn
			isOpened={is_drawer_menu_opened}
			on:toggle={(e) => {
				toggle_drawer_menu(e.detail.is_opened);
			}}
		/>
	</nav>
</header>

<div id="header2" class:open={is_drawer_menu_opened}>
	<div class="socials">
		<Socials showEmail style="justify-content:left; margin-left:32px;" />
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

				&::before,
				&::after {
					content: '';
					position: absolute;
					width: 120%;
					height: 4px;
					background-color: $primary-color-darker;
				}
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
