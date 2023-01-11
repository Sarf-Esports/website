<!-- © 2022 REVATI -->
<script>
	import { browser } from '$app/environment';

	import { build_news_slider, news_prev, news_next } from '$lib/news_slider';
	import { build_member_lists } from '$lib/member_list';
	import { fade_in_at_scroll } from '$lib/util';

	if (browser) {
		build_news_slider();
		build_member_lists();
		fuck_news_arrows();

		window.onscroll = () => {
			fade_in_at_scroll(document.getElementsByClassName('team-classes-title'));
		};

		window.addEventListener('resize', function () {
			fuck_news_arrows();
		});

		document.addEventListener('keydown', function (event) {
			close_modal(event.key);
		});
	}

	let is_contact_visible = false;

	/**
	 * Toggles the visibility of the contact modal.
	 */
	function toggle_contact_modal() {
		let cm = document.getElementById('contact-modal');
		// @ts-ignore
		let cm_cl = cm.classList;
		if (is_contact_visible == true) {
			cm_cl.add('hide-contact-modal');
			cm_cl.remove('show-contact-modal');

			// Allow scrolling
			let body = document.getElementsByTagName('body')[0].style;
			body.height = 'auto';
			body.overflow = 'auto';

			// Remove dark background
			document.getElementById('contact-modal-back')?.remove();

			is_contact_visible = false;
		} else {
			cm_cl.add('show-contact-modal');
			cm_cl.remove('hide-contact-modal');

			// Prevent scrolling
			let body = document.getElementsByTagName('body')[0].style;
			body.height = '100vh';
			body.overflow = 'hidden';

			// Spawn dark background
			let bg = document.createElement('div');
			bg.id = "contact-modal-back";
			bg.setAttribute('style', 'position:fixed;inset:0;background-color:#000000aa;z-index:254;');
			bg.onclick = toggle_contact_modal;

			// @ts-ignore
			cm.parentNode.insertBefore(bg, cm);

			is_contact_visible = true;
		}
	}

	/**
	 * @param {string} key
	 */
	function close_modal(key) {
		if (key == 'Escape' && is_contact_visible) {
			toggle_contact_modal();
		}
	}

	function fuck_news_arrows() {
		let arrows = document.getElementsByClassName('arrow');
		// @ts-ignore
		// DEBUG
		[...arrows].forEach((a) => (a.style.width = a.clientHeight + 'px'));
	}

	/**
	 * Loops playback the OP video at intervals.
	 * @param {Event & { currentTarget: EventTarget & HTMLVideoElement; }} video
	 */
	function op_loop(video) {
		let v = video.target;
		let container = document.getElementById('op-container')?.style;
		// @ts-ignore
		container.backgroundImage = 'url(/images/logos/revati_large_dark.png)';
		// @ts-ignore
		v.style.opacity = 0;
		setTimeout(() => {
			// @ts-ignore
			v.style.opacity = 1;
			// @ts-ignore
			v.play();
			// @ts-ignore
			container.backgroundImage = 'none';
		}, 15000);
	}
</script>

<svelte:head>
	<link rel="icon" href="/images/logos/REVATI_LOGO_BLK_2_square.png" />
	<title>REVATI</title>
	<meta name="title" content="REVATI" />
	<meta name="description" content="REVATI の公式サイトです。" />

	<meta property="og:title" content="REVATI" />
	<meta property="og:description" content="REVATI の公式サイトです。" />
	<!-- TODO: Input the URL of this page ↓↓ -->
	<meta property="og:url" content="https://sarf-esports.github.io/website" />
	<!-- ↓ website or article -->
	<meta property="og:type" content="website" />
	<link rel="stylesheet" href="/stylesheets/style.css" />
	<link rel="stylesheet" href="/stylesheets/util.css" />
</svelte:head>

<header>
	<nav>
		<a href="/" class="has-img"
			><img src="/images/logos/REVATI_LOGO_BLK_2.png" alt="logo" /></a
		>
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

<main>
	<div class="container bg-default">
		<div id="op-container">
			<video
				src="/videos/revati_op_muted.mov"
				id="op-video"
				on:ended={(self) => op_loop(self)}
				muted
				autoplay
				playsinline
			/>
		</div>
		<a href="#about" class="dropdown-btn">▼</a>
	</div>

	<div class="container bg-default">
		<section id="about">
			<div class="section-title">
				<img src="/images/abouts.svg" alt="about" />
			</div>
			<div class="section-content">
				<p>
					2022年に設立された大阪を拠点としているアマチュアEスポーツチームです。
					現在「Fortnite部門」「APEX部門」「Minecraft部門」の3部門で活動しており、
					eスポーツの発展を目的として精力的に活動を行っております。
				</p>
			</div>
			<a href="#news" class="dropdown-btn">▼</a>
		</section>
	</div>

	<div class="container bg-default">
		<section id="news">
			<div class="section-title">
				<img src="/images/news.svg" alt="news" />
			</div>
			<div class="section-content">
				<button on:click={(self) => news_prev(self)} class="arrow inactive" id="arrow-left"
					>&lt</button
				>
				<button on:click={(self) => news_next(self)} class="arrow" id="arrow-right">&gt</button>
				<ul id="news-slider" />
			</div>
			<a href="#team" class="dropdown-btn" style="margin-top:16px;">▼</a>
		</section>
	</div>
	<div class="container bg-default">
		<section id="team">
			<div class="section-title">
				<img src="/images/team.svg" alt="team" />
			</div>
			<div class="section-content">
				<ul class="title-list">
					<li>
						<h2 class="team-classes-title">Fortnite</h2>
						<ul class="member-list" id="fortnite-member-list" />
					</li>
					<li>
						<h2 class="team-classes-title">Apex Legends</h2>
						<ul class="member-list" id="apex-member-list" />
					</li>
					<li>
						<h2 class="team-classes-title">Minecraft</h2>
						<ul class="member-list" id="minecraft-member-list" />
					</li>
					<li>
						<h2 class="team-classes-title">Streamer</h2>
						<ul class="member-list" id="streamer-member-list" />
					</li>
					<li>
						<h2 class="team-classes-title">Owner</h2>
						<ul class="member-list" id="owner-member-list" />
					</li>
				</ul>
			</div>
			<a href="#store" class="dropdown-btn">▼</a>
		</section>
	</div>

	<div class="container bg-default">
		<section id="store">
			<div class="section-title">
				<img src="/images/store.svg" alt="store" />
			</div>
			<div class="section-content">
				<img
					src="https://media.discordapp.net/attachments/851587574631628831/1050400761487568966/kokesi.png"
					alt="store thumbnail"
				/>
				<a href="https://suzuri.jp/REVATI" class="go-to-store">お買い求めはこちら ></a>
			</div>
			<a href="#sponsor" class="dropdown-btn">▼</a>
		</section>
	</div>

	<div class="container bg-default">
		<section id="sponsor">
			<div class="section-title">
				<img src="/images/sponsor.svg" alt="sponsor" />
			</div>
			<div class="section-content">...( 'ω')</div>
		</section>
	</div>
</main>

<footer>
	<!-- TODO: Implement the footer -->
	<p class="copyright">© 2022 REVATI</p>
</footer>

<div id="contact-modal" class="hide-contact-modal">
	<h1>- CONTACT US -</h1>
	<span class="modal-close-btn" on:click={toggle_contact_modal}>&times;</span>
	<p>
		<nobr>チームに関するお問い合わせはこちらからお願い致します。</nobr><br />
		※返答までにお時間をいただく場合がございます。<br />
		※お答えできない場合がございます。
	</p>
	<a
		href="https://docs.google.com/forms/d/e/1FAIpQLSd9P3VCWiCrOpHAvsQpjwZBBLMlznJP4ZW-KWs7rzxXu1ZTMg/viewform?usp=pp_url"
		id="mail-btn"
		target="_blank"
		draggable="false"
	>
		メールを送る
	</a>
</div>

<style>
	body {
		background-attachment: fixed;
		background-size: cover;
	}

	#op-container {
		display: block;
		height: 90vh;
		background-image: none;
		background-repeat: no-repeat;
		background-position: center;
	}

	#op-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.container {
		width: 100%;
	}

	.container::before {
		content: '';
		display: block;
		padding-top: 64px;
	}

	.container::after {
		content: '';
		display: block;
		padding-top: 86px;
	}

	section {
		max-width: 768px;
		margin: 0 auto;
		display: block;
		padding-top: 112px;
		margin-top: -112px;
		padding-left: 16px;
		padding-right: 16px;
	}

	.dropdown-btn {
		text-decoration: none;
		color: white;
		padding: 1rem 1.25rem;
		display: inline-block;
		margin: 16px auto 32px auto;
		font-size: 24px;
		user-select: none;
		transition: 0.4s;
	}

	.dropdown-btn:hover {
		transform: translateY(4px);
		color: white;
	}

	.dropdown-btn::after {
		display: block;
		color: gray;
		font-size: 16px;
		position: absolute;
		left: 0;
		right: 0;
	}

	.dropdown-btn:hover::after {
		content: 'NEXT';
	}

	.section-title {
		text-align: center;
		margin-top: 86px;
		margin-bottom: 32px;
	}

	.section-title img {
		height: 64px;
		width: auto;
		user-select: none;
		pointer-events: none;
	}

	.section-content {
		margin: 16px 0;
	}

	.section-content p {
		text-align: left;
		max-width: 576px;
		font-size: 22px;
		margin: 0 auto;
		font-weight: 1;
		letter-spacing: 0.075em;
		line-height: 1.5;
	}

	#store .section-content img {
		max-width: 86%;
		border: 4px solid #65743b;
	}

	#store .go-to-store {
		display: block;
		max-width: 86%;
		margin: 16px auto 0 auto;
		text-decoration: none;
		color: #d1ff46;
		font-size: 24px;
		font-weight: 900;
		padding: 16px;
		border: 4px solid #d1ff46;
		transition: 0.4s;
	}

	#store .go-to-store:hover {
		background-color: #d1ff46;
		color: #1d1d1d;
		box-shadow: 0 12px 0 #658111;
	}

	#store .go-to-store:active {
		box-shadow: 0 3px 0 #658111;
		transform: translateY(9px);
	}

	/* ▼ Contact modal ▼ */

	#contact-modal {
		position: fixed;
		inset: 0;
		margin: auto;
		max-width: 320px;
		height: 192px;
		background-color: #202512;
		border: 3px solid #e9ffa7;
		padding: 16px;
		z-index: 255;
	}

	#contact-modal h1 {
		color: #e9ffa7;
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 16px;
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

	#contact-modal p {
		font-size: 12px;
		margin-bottom: 16px;
		text-align: left;
	}

	#mail-btn {
		display: inline-block;
		text-decoration: none;
		border: 3px solid #fff9ee;
		color: white;
		font-size: 16px;
		font-weight: 900;
		padding: 4px 10px;
		user-select: none;
		transition: 0.3s;
	}

	#mail-btn:hover {
		background-color: #fff9ee;
		color: #191919;
		box-shadow: 0 5px 0 #cfb27a;
	}

	#mail-btn:active {
		box-shadow: 0 1px 0 #cfb27a;
		transform: translateY(4px);
	}

	.show-contact-modal {
		display: block;
		animation: showModal 0.6s;
	}

	@keyframes showModal {
		0% {
			opacity: 0;
			transform: translateY(32px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hide-contact-modal {
		display: none;
	}

	@keyframes hideModal {
		0% {
			opacity: 1;
			transform: translateY(0);
		}

		100% {
			opacity: 0;
			transform: translateY(32px);
		}
	}
	/* ▲ Contact modal ▲ */
</style>
