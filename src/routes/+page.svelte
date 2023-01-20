<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';

	import { add_class_at_scroll } from '$lib/util';

	import Header from '$lib/header.svelte';
	import SectionTitle from './section_title.svelte';
	import DropdownBtn from './dropdown_button.svelte';
	import NewsSlider from './news_slider.svelte';
	import MemberLists from './member_lists.svelte';
	import Footer from '$lib/footer.svelte';

	if (browser) {
		window.addEventListener('scroll', function () {
			add_class_at_scroll(
				document.getElementsByClassName('reveal-anim-con'),
				'reveal-anim-con-active'
			);
			add_class_at_scroll(
				document.getElementsByClassName('reveal-anim-item'),
				'reveal-anim-item-active'
			);
		});
	}

	/** @type {HTMLDivElement} */
	let op_container;

	/**
	 * Loops playback the OP video at intervals.
	 * @param {Event & { currentTarget: EventTarget & HTMLVideoElement; }} video
	 */
	function op_loop(video) {
		let v = video.currentTarget;
		// @ts-ignore
		let container = op_container.classList;
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
		desc: '俺だけ入れる【最強プロeスポーツチーム】で宇宙最強〜一日中ゲームをして引きこもる低学歴ニートの俺、実は家族から見放された全一プロeスポーツ選手の生まれ変わりだった。俺にだけ使えるUSSRランク級最強キーボードと1000円マウスで宇宙で最強のeスポーツ選手となる～俺にだけある最強神スキルで無双したら垢BAN食らったので引退します～'
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

<Header />

<main>
	<div class="container">
		<div id="op-container" class="is-playing" bind:this={op_container}>
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

	<div class="container">
		<section id="about">
			<SectionTitle name="about" />
			<div class="section-content">
				<div class="slogan reveal-anim-con">
					<div class="reveal-anim-item">
						<h1>UNDEFEATED SPIRIT</h1>
						<h2>「不屈の精神」</h2>
					</div>
				</div>
				<br />
				<div class="reveal-anim-con">
					<p class="reveal-anim-item">
						勝負の世界である以上、成績が低迷してしまうこともあると思います。
						<br /><br />
						そんなときでも私たちは物事の目的達成のために継続的に粘り強く努力することを厭わず 最後までやり遂げる無限のパワー・可能性を秘めています。
					</p>
				</div>
			</div>
			<DropdownBtn to="news" />
		</section>
	</div>

	<div class="container">
		<section id="news">
			<SectionTitle name="news" />
			<div class="section-content"><NewsSlider /></div>
			<DropdownBtn to="teams" style="margin-top:16px;" />
		</section>
	</div>
	<div class="container">
		<section id="teams">
			<SectionTitle name="teams" />
			<div class="section-content"><MemberLists /></div>
			<DropdownBtn to="store" />
		</section>
	</div>

	<div class="container">
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

	<div class="container">
		<section id="sponsor">
			<SectionTitle name="sponsor" />
			<div class="section-content reveal-anim-con">
				<p class="reveal-anim-item">...( 'ω')</p>
			</div>
		</section>
	</div>
</main>

<Footer />

<style lang="scss" global>
	@import '/assets/stylesheets/util.scss';
	@import '/assets/stylesheets/variables.scss';
	@import '/assets/stylesheets/reveal_anim.scss';

	.container {
		width: 100%;
		background-color: $secondary-color;
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

	$scroll-offset: 82px;

	section {
		max-width: 768px;
		margin: 0 auto;
		display: block;
		padding-top: $scroll-offset;
		margin-top: -$scroll-offset;
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

	@font-face {
		font-family: 'Zen Kaku Gothic Antique Bold';
		src: url('/fonts/Zen_Kaku_Gothic_Antique/ZenKakuGothicAntique-Bold.ttf');
	}

	#about {
		.slogan {
			font-family: 'Zen Kaku Gothic Antique Bold';
			font-weight: 700;
			padding: 0 16px;

			// DEBUG: border
			// $border: 3px solid $primary-color;
			// border-top: $border;
			// border-bottom: $border;

			// DEBUG: neumorphism
			box-shadow: inset 10px 10px 8px #070707, inset -10px -10px 8px #191a18;
			border-radius: 6px;

			h1 {
				font-size: 48px;
				letter-spacing: 0.075em;
			}

			h2 {
				font-size: 36px;
				margin-top: -32px;
				padding-bottom: 16px;
			}
		}

		p {
			text-align: center;
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

		$btn-shadow-col: #658111;

		.go-to-store:hover,
		.go-to-store:active {
			background-color: $primary-color;
			color: #1d1d1d;
			box-shadow: 0 12px 0 $btn-shadow-col;
		}

		.go-to-store:active {
			box-shadow: 0 3px 0 $btn-shadow-col;
			transform: translateY(9px);
		}
	}
</style>
