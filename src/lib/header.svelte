<!-- © 2022 - 2023 REVATI -->
<script>
	import Contact from './contact.svelte';
</script>

<header>
	<nav>
		<a href="/"><img src="/images/logos/REVATI_LOGO_BLK_2.png" alt="logo" /></a>
		<ul>
			<li><a href="/#about" id="hd-about">ABOUT</a></li>
			<li><a href="/#news" id="hd-news">NEWS</a></li>
			<li><a href="/#teams" id="hd-team">TEAMS</a></li>
			<li><a href="/#store" id="hd-store">STORE</a></li>
			<li><a href="/#sponsor" id="hd-sponsor">SPONSOR</a></li>
			<Contact />
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '/assets/stylesheets/header.scss';
	@import '/assets/stylesheets/variables.scss';

	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/Poppins/Poppins-Regular.ttf');
	}

	header {
		position: fixed;
		top: -0.5px;
		z-index: 253;
		background-color: $primary-color;
		width: 100%;
		box-shadow: 0 0 10px 0 black;
		border-bottom: 6px solid #65743b;
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		letter-spacing: -1px;

		img {
			width: 86px;
			transition: 0.3s ease-out;
			float: left;
			margin-left: 18px;
			margin-top: 8px;
		}

		img:hover {
			transform: translateY(-4px) scale(1.32);
			filter: drop-shadow(0 8px 0 #00000080);
			transition: 0.3s;
		}

		ul {
			display: flex;
			align-items: center;
			justify-content: right;
		}
	}
</style>
