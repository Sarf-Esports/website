<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';

	import { build_news_slider, news_prev, news_next, fuck_news_arrows } from '$lib/news_slider';
	import { build_member_lists } from '$lib/member_list';
	import { fade_in_at_scroll } from '$lib/util';

	import Header from '$lib/header.svelte';

	if (browser) {
		build_news_slider();
		build_member_lists();

		window.onscroll = () => {
			fade_in_at_scroll(document.getElementsByClassName('team-classes-title'));
			fuck_news_arrows();
		};

		window.addEventListener('resize', function () {
			fuck_news_arrows();
		});
	}

	/**
	 * Loops playback the OP video at intervals.
	 * @param {Event & { currentTarget: EventTarget & HTMLVideoElement; }} video
	 */
	function op_loop(video) {
		let v = video.currentTarget;
		// @ts-ignore
		let container = document.getElementById('op-container').classList;
		container.remove('is-playing');
		v.classList.add('invisible');
		setTimeout(() => {
			v.classList.remove('invisible');
			v.play();
			container.add('is-playing');
		}, 15000);
	}

	const head = {
		title: 'REVATI',
		desc: 'REVATI の公式サイトです。'
	};
</script>

<svelte:head>
	<title>REVATI</title>
	<meta name="title" content={head.title} />
	<meta name="description" content={head.desc} />

	<meta property="og:title" content={head.title} />
	<meta property="og:description" content={head.desc} />
	<meta property="og:url" content="https://revati.jp" />
	<meta property="og:type" content="website" />

	<link rel="stylesheet" href="/stylesheets/util.static.css" />
</svelte:head>

<Header is_home={true} />

<main>
	<div class="container bg-default">
		<div id="op-container" class="is-playing">
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
				<img src="/images/store_thumbnail.png" alt="store thumbnail" />
				<a
					href="https://suzuri.jp/REVATI"
					class="go-to-store"
					target="_blank"
					rel="noopener noreferrer"
					draggable="false">お買い求めはこちら ></a
				>
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
	<p class="copyright">© 2022 - 2023 REVATI</p>
</footer>

<style lang="scss">
	@import "./assets/stylesheets/style.scss";
	@import "./assets/stylesheets/util.scss";

	#op-container {
		display: block;
		height: 90vh;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(/images/logos/revati_large_dark.png);
	}

	#op-container.is-playing {
		background-image: none;
	}

	#op-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 1;
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
		border: 4px solid #f8ffb5;
		transition: 0.18s;
	}

	#store .section-content img:hover {
		filter: sepia(28%) saturate(50%);
		transition: 0.6s;
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
</style>