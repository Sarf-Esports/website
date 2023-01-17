<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';

	import { build_member_lists } from '$lib/member_list';
	import { add_class_at_scroll } from '$lib/util';

	import Header from '$lib/header.svelte';
	import SectionTitle from './section_title.svelte';
	import DropdownBtn from './dropdown_button.svelte';
	import NewsSlider from './news_slider.svelte';

	if (browser) {
		build_member_lists();

		window.addEventListener('scroll', function () {
			add_class_at_scroll(document.getElementsByClassName('team-classes-title'), 'fade-in-right');
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
		desc: '俺だけ入れる【最強プロeスポーツチーム】で宇宙最強〜一日中ゲームをして引きこもるニートの俺、実は家族から見放された全一プロeスポーツ選手の生まれ変わりだった。俺にだけ使えるUSSRランク級最強キーボードと1000円マウスで宇宙で最強のeスポーツ選手となる～俺にだけある神スキルで無双したら垢BAN食らったので引退します～'
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
		<DropdownBtn to="about" />
	</div>

	<div class="container bg-default">
		<section id="about">
			<SectionTitle name="about" />
			<div class="section-content reveal-anim">
				<p>
					{head.desc}
					<!-- 2022年に設立された大阪を拠点としているアマチュアEスポーツチームです。
					現在「Fortnite部門」「APEX部門」「Minecraft部門」の3部門で活動しており、
					eスポーツの発展を目的として精力的に活動を行っております。 -->
				</p>
			</div>
			<DropdownBtn to="news" />
		</section>
	</div>

	<div class="container bg-default">
		<section id="news">
			<SectionTitle name="news" />
			<div class="section-content"><NewsSlider /></div>
			<DropdownBtn to="team" style="margin-top:16px;" />
		</section>
	</div>
	<div class="container bg-default">
		<section id="teams">
			<SectionTitle name="teams" />
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
			<DropdownBtn to="store" />
		</section>
	</div>

	<div class="container bg-default">
		<section id="store">
			<SectionTitle name="store" />
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
			<DropdownBtn to="sponsor" />
		</section>
	</div>

	<div class="container bg-default">
		<section id="sponsor">
			<SectionTitle name="sponsor" />
			<div class="section-content">...( 'ω')</div>
		</section>
	</div>
</main>

<footer>
	<!-- TODO: Implement the footer -->
	<p class="copyright">© 2022 - 2023 REVATI</p>
</footer>

<style lang="scss" global>
	@import '/assets/stylesheets/style.scss';
	@import '/assets/stylesheets/util.scss';

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

	.title-list {
		list-style: none;
		padding-left: 0;
	}

	.team-classes-title {
		text-align: left;
		font-size: 28px;
		border-bottom: 2px solid white;
		width: 94%;
	}

	.member-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		margin: 0 auto;
	}

	.member-list li {
		align-items: center;
		margin: 8px 6px;
		width: 138px;
		height: 224px;
		background-color: #e6e6e6;
		list-style: none;
		border-radius: 4px;
		border: 4px solid #c0c0c0;
		color: #3a490c;
		font-weight: 900;
	}
	.member-list li > img {
		width: 86px;
		height: 86px;
		border-radius: 50%;
		margin: 20px auto;
		border: 4px solid #c0c0c0;
		pointer-events: none;
		user-select: none;
	}

	#owner-member-list li {
		background-color: #b4e7d6;
		border: 4px solid #318569;
	}

	#owner-member-list li > img {
		border: 4px solid #318569;
	}

	.member-list h3 {
		font-size: 18px;
		margin-top: -16px;
	}

	.member-list a {
		text-decoration: none;
		margin: 0 4px;
	}

	.member-list a img {
		user-select: none;
	}

	.member-twitter img {
		height: 26px;
		transform: translateY(2px);
	}

	.member-youtube img {
		height: 24px;
	}

	.member-twitch img {
		height: 30px;
		transform: translateY(4px);
	}

	// .reveal-anim {}
</style>
