<!-- © 2022 - 2023 REVATI -->
<script>
	import { copyright } from '$lib/variables.js';

	import Contact from './contact.svelte';
	import HbBtn from './hamburger_button.svelte';

	let is_drawer_menu_opened = false;

	/**
	 * @param {CustomEvent} e
	 */
	function toggle_menu(e) {
		is_drawer_menu_opened = e.detail.is_opened;

		let body = document.getElementsByTagName('body')[0].classList;
		if (is_drawer_menu_opened == true) {
			body.add('prevent-scroll');
		} else {
			body.remove('prevent-scroll');
		}
	}
</script>

<header class:open={is_drawer_menu_opened}>
	<nav>
		<a href="/"><img src="/images/logos/REVATI_LOGO_BLK_2.png" alt="logo" draggable="false" /></a>
		<ul>
			<li><a href="/#about" id="hd-about">ABOUT</a></li>
			<li><a href="/#news" id="hd-news">NEWS</a></li>
			<li><a href="/#teams" id="hd-team">TEAMS</a></li>
			<li><a href="/#store" id="hd-store">STORE</a></li>
			<li><a href="/#sponsor" id="hd-sponsor">SPONSOR</a></li>
			<Contact />
		</ul>
		<h3>{copyright}</h3>
		<HbBtn on:toggle={toggle_menu} />
	</nav>
</header>

<style lang="scss">
	@import '/assets/stylesheets/header.scss';
	@import '/assets/stylesheets/variables.scss';
	@import '/assets/stylesheets/mixins.scss';

	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/Poppins/Poppins-Regular.ttf');
	}

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
		border-bottom: 6px solid $border-col;
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		letter-spacing: -1px;
		touch-action: none;
		transition: 0.28s ease-in;

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
			display: none;
			color: #364213;
			font-size: 17px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
		}

		&.open {
			@include sp {
				$opened_header_height: 75vh;

				top: calc($opened_header_height - 100vh - $height);

				img {
					opacity: 0;
				}

				ul {
					opacity: 1;
				}

				h3 {
					display: block;
				}
			}
		}
	}
</style>
