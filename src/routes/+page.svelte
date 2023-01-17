<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';

	import { add_class_at_scroll } from '$lib/util';
	import { reveal_anim } from '$lib/animations';

	import Header from '$lib/header.svelte';
	import SectionTitle from './section_title.svelte';
	import DropdownBtn from './dropdown_button.svelte';
	import NewsSlider from './news_slider.svelte';
	import MemberLists from './member_lists.svelte';

	if (browser) {
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
			<div class="section-content" in:reveal_anim={{}}>
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
			<div class="section-content"><MemberLists /></div>
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
	<p class="copyright">© 2022 - 2023 REVATI</p>
</footer>

<style lang="scss" global>
	@import '/assets/stylesheets/util.scss';
	@import '/assets/stylesheets/variables.scss';

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

	section {
		max-width: 768px;
		margin: 0 auto;
		display: block;
		padding-top: 112px;
		margin-top: -112px;
		padding-left: 16px;
		padding-right: 16px;

		.section-content {
			margin: 16px 0;
			p {
				text-align: left;
				max-width: 576px;
				font-size: 22px;
				margin: 0 auto;
				font-weight: 1;
				letter-spacing: 0.075em;
				line-height: 1.5;
			}
		}
	}

	#store {
		.section-content {
			img {
				max-width: 86%;
				border: 4px solid #f8ffb5;
				transition: 0.18s;
			}
			img:hover {
				filter: sepia(28%) saturate(50%);
				transition: 0.6s;
			}
		}

		.go-to-store {
			display: block;
			max-width: 86%;
			margin: 16px auto 0 auto;
			text-decoration: none;
			color: $primary-color;
			font-size: 24px;
			font-weight: 900;
			padding: 16px;
			border: 4px solid $primary-color;
			transition: 0.4s;
		}

		.go-to-store:hover {
			background-color: $primary-color;
			color: #1d1d1d;
			box-shadow: 0 12px 0 #658111;
		}

		.go-to-store:active {
			background-color: $primary-color;
			box-shadow: 0 3px 0 #658111;
			transform: translateY(9px);
		}
	}

	footer {
		height: 24vh;
		background-color: #0a0a0a;

		.copyright {
			margin-top: 2em;
		}
	}
</style>
