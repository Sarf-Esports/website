<!-- © 2022 - 2023 REVATI -->

<script>
    import { toggle_contact_modal } from './contact_modal.js';

	/** @type {boolean} */
	export let is_home;
</script>

{#if is_home}
	<header>
		<nav>
			<a href="/" class="has-img"><img src="/images/logos/REVATI_LOGO_BLK_2.png" alt="logo" /></a>
			<ul>
				<li><a href="#about" id="hd-about">ABOUT</a></li>
				<li><a href="#news" id="hd-news">NEWS</a></li>
				<li><a href="#team" id="hd-team">TEAM</a></li>
				<li><a href="#store" id="hd-store">STORE</a></li>
				<li><a href="#sponsor" id="hd-sponsor">SPONSOR</a></li>
				<li>
					<a
						href="/"
						id="hd-contact"
						on:click={(self) => {
							self.preventDefault();
							toggle_contact_modal();
						}}>CONTACT</a
					>
				</li>
			</ul>
		</nav>
	</header>
{:else}
	<h1>The header is not implemented yet :&#40;</h1>
{/if}

<style>
	header {
		position: fixed;
		z-index: 253;
		background-color: #d1ff46;
		width: 100%;
		box-shadow: 0 0 10px 0 black;
		border-bottom: 6px solid #65743b;
		font-family: 'Poppins';
		font-weight: 600;
		letter-spacing: -1px;
	}

	header img {
		width: 86px;
		transition: 0.3s ease-out;
	}

	nav > a.has-img {
		float: left;
		margin-left: 18px;
		margin-top: 8px;
	}

	header img:hover {
		transform: translateY(-4px) scale(1.32);
		filter: drop-shadow(0 8px 0 #00000080);
		transition: 0.3s;
	}

	header nav ul {
		display: flex;
		align-items: center;
		justify-content: right;
	}

	header nav ul li:last-child {
		margin-right: 2.6em;
	}

	header nav ul li {
		list-style: none;
		margin: 10px 12px 2px 10px;
	}

	header nav ul li a {
		color: black;
		font-size: 28px;
		text-decoration: none;
		transition: 0.3s;
	}

	header nav ul li a:hover {
		color: #4e640c;
		text-shadow: 0.5px 0 0 #7d9c1e, -0.5px 0 0 #7d9c1e;
	}

	header nav ul li a::after {
		content: '';
		display: block;
		border-bottom: 2px solid #394907;
		margin: 0 auto;
		transform: scaleX(0);
		transition: 0.2s;
	}

	header nav ul li a:hover::after {
		transform: scaleX(112%);
	}
</style>
