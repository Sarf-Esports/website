<!-- © 2022 - 2023 REVATI -->
<script lang="ts">
	import { copyright } from '$lib/variables';
	import { toggle_scroll_prevention } from '$lib/util';

	import Contact from './contact.svelte';
	import HbBtn from './hamburger_button.svelte';
	import Socials from '../socials.svelte';
	import LangSwitcher from '../lang_switcher.svelte';

	let is_drawer_menu_opened = false;

	let items = ['about', 'news', 'teams', 'store', 'sponsor'];

	/** Toggles drawer menu open/close. */
	function toggle_drawer_menu(open: boolean) {
		is_drawer_menu_opened = open;
		toggle_scroll_prevention(is_drawer_menu_opened);
	}
</script>

<div id="header-bg" class:visible={is_drawer_menu_opened} />

<header class:open={is_drawer_menu_opened}>
	<nav>
		<a href="/"><img src="/images/logos/REVATI_LOGO_BLK_2.png" alt="logo" draggable="false" /></a>
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
		<h3>{copyright}</h3>
		<HbBtn
			is_opened={is_drawer_menu_opened}
			on:toggle={(e) => {
				toggle_drawer_menu(e.detail.is_opened);
			}}
		/>
	</nav>
</header>

<div id="header2" class:open={is_drawer_menu_opened}>
	<div class="socials">
		<Socials show_email style="justify-content:left; margin-left:32px;" />
	</div>
	<div class="lang-switcher"><LangSwitcher /></div>
</div>

<style lang="scss">
	@use '/assets/stylesheets/variables.scss' as *;
	@use '/assets/stylesheets/mixins.scss' as *;

	@use '/assets/stylesheets/header.scss';

	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/Poppins/Poppins-Regular.ttf');
	}

	$border-thickness: 6px;
	$tf-duration: 0.28s;
	$opened_header_height: 75vh;

	header {
		$height: 88px;
		$border-col: #65743b;
		$logo-width: 86px;

		position: fixed;
		top: -100vh;
		z-index: 253;
		background-color: $primary-color;
		width: 100%;
		height: $height;
		box-shadow: 0 0 10px 0 black;
		border-top: 100vh solid $primary-color;
		border-bottom: $border-thickness solid $border-col;
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		letter-spacing: -1px;
		touch-action: none;
		transition: $tf-duration ease-in;

		img {
			width: $logo-width;
			transition: 0.3s ease-out;
			float: left;
			margin-left: 18px;
			margin-top: 8px;
			overflow: visible;

			@include pc {
				&:hover {
					transform: translateY(-4px) scale(1.32);
					filter: drop-shadow(0 8px 0 #00000080);
					transition: 0.3s;
				}
			}

			@include sp {
				margin-top: 24px;
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
				transform: translateY(-50vh);
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
					background-color: $border-col;
				}
			}
		}

		h3 {
			opacity: 0;
			color: #364213;
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
				top: calc($opened_header_height - 100vh - $height);

				img {
					transform: translateY(-86vh);
					opacity: 0;
				}

				ul,
				h3 {
					opacity: 1;
				}

				h3 {
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
		$header2-primary-col: #283018;
		background-color: $header2-primary-col;
		border-right: 50vw solid $header2-primary-col;
		border-left: $border-thickness solid #141a09;
		transition: $tf-duration ease-in;

		@include sp {
			width: 100vw;
			height: calc(100vh - $opened_header_height - $border-thickness + 2px);
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
			height: 100vh;
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
