<!-- © 2022 REVATI -->
<script lang="ts">
	import SectionTitle from './SectionTitle.svelte';
	import NewsSlider from '$lib/components/news/NewsSlider.svelte';
	import MemberLists from './MemberLists.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import { addClassAtScroll } from '$lib/util';
	import { SITE_URL } from '$lib/variables';
	import { _ } from 'svelte-i18n';

	export let data: PageData;

	if (browser) {
		window.addEventListener('scroll', function () {
			addClassAtScroll(
				document.getElementsByClassName('reveal-anim-con'),
				'reveal-anim-con-active'
			);
			addClassAtScroll(
				document.getElementsByClassName('reveal-anim-item'),
				'reveal-anim-item-active'
			);
		});
	}

	let opContainer: HTMLDivElement;

	/** Loops playback the OP video at intervals. */
	function opLoop(video: Event & { currentTarget: EventTarget & HTMLVideoElement }) {
		let v = video.currentTarget;
		let container = opContainer.classList;
		container.remove('is-playing');
		v.classList.add('invisible');
		setTimeout(() => {
			v.classList.remove('invisible');
			v.play();
			container.add('is-playing');
		}, 8000);
	}

	const HEAD = {
		title: 'REVATI',
		desc: '勝負の世界である以上、成績が低迷してしまうこともあると思います。そんなときでも私たちは物事の目的達成のために継続的に粘り強く努力することを厭わず 最後までやり遂げる無限のパワー・可能性を秘めています。'
	};
</script>

<svelte:head>
	<title>REVATI</title>
	<meta name="title" content={HEAD.title} />
	<meta name="description" content={HEAD.desc} />

	<meta property="og:title" content={HEAD.title} />
	<meta property="og:description" content={HEAD.desc} />
	<meta property="og:url" content={SITE_URL} />
</svelte:head>

<main>
	<div class="container">
		<div id="op-container" class="is-playing" bind:this={opContainer}>
			<video
				src="/videos/revati_op_muted.mp4"
				id="op-video"
				on:ended={(self) => opLoop(self)}
				muted
				autoplay
				playsinline
			/>
		</div>
	</div>

	<div class="container">
		<section id="about">
			<SectionTitle name="about" />
			<div class="section-content">
				<div class="slogan reveal-anim-con">
					<div class="reveal-anim-item">
						<h1>UNDEFEATED SPIRIT</h1>
						<h2>{$_('top.about.undefeatedSpirit')}</h2>
					</div>
				</div>
				<br />
				<div class="reveal-anim-con">
					<p class="reveal-anim-item">
						{$_('top.about.0')}
						<br /><br />
						{$_('top.about.1')}
					</p>
				</div>
			</div>
		</section>
	</div>

	<div class="container">
		<section id="news">
			<SectionTitle name="news" />
			<div class="section-content">
				<NewsSlider articles={data.articles} thumbnailImgFmts={data.thumbnailImgFmts} />
			</div>
		</section>
	</div>
	<div class="container">
		<section id="teams">
			<SectionTitle name="teams" />
			<div class="section-content"><MemberLists /></div>
		</section>
	</div>

	<div class="container">
		<section id="store">
			<SectionTitle name="store" />
			<div class="section-content reveal-anim-con">
				<p class="reveal-anim-item">Coming soon...</p>
				<!-- <img src="/images/store_thumbnail.webp" alt="" loading="lazy" />
				<a
					href="https://suzuri.jp/REVATI"
					target="_blank"
					rel="noopener noreferrer"
					draggable="false"
				>
					<LinkButton text="お買い求めはこちら" />
				</a> -->
			</div>
		</section>
	</div>

	<div class="container">
		<section id="sponsor">
			<SectionTitle name="sponsor" />
			<div class="section-content">
				<a href="https://gachisup.com" target="_blank" rel="noopener noreferrer">
					<img src="/images/logos/gachisup_oxipng.png" alt="" />
					<LinkButton text="ガチサプ ONLINE STORE" />
				</a>
			</div>
		</section>
	</div>
</main>

<style lang="scss" global>
	@use '/assets/stylesheets/variables/color' as *;
	@use '/assets/stylesheets/variables/mixin' as *;

	@use '/assets/stylesheets/util';
	@use '/assets/stylesheets/reveal_anim';
	@use '/assets/stylesheets/style';

	#op-container {
		display: block;
		background-image: url(/images/logos/revati/title_oxipng.png);
		background-repeat: no-repeat;
		background-position: center;
		height: 100vh;
		position: relative;
		bottom: 18px;

		@include sp {
			background-size: 72vw;
			background-position: 50% 52%;
		}
	}

	#op-container.is-playing {
		background-image: none;
	}

	#op-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;

		@include pc {
			height: 90vh;
		}

		@include sp {
			height: 134vw;
			background-size: 256vw;
		}
	}

	#about {
		.slogan {
			font-family: 'Zen Kaku Gothic Antique Bold';
			font-weight: 700;
			padding: 0 6px;
			margin: 0 auto;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #d3d3d3;
				clip-path: polygon(
					0 16%,
					0 100%,
					100% 100%,
					100% 100%,
					92% 100%,
					100% 86%,
					100% 100%,
					0 100%,
					0 0,
					8% 0
				);
				border-radius: 4px;
			}

			h1 {
				letter-spacing: 0.075em;
				font-size: 48px;
			}

			h2 {
				font-size: 36px;
				margin-top: -32px;
				padding-bottom: 16px;
			}

			@include sp {
				max-width: 448px;

				h1,
				h2 {
					display: inline-block;
				}

				h1 {
					font-size: 30px;
					line-height: 1.2;
					padding: 0 5px;
				}

				h2 {
					font-size: 30px;
					margin-top: -18px;
					padding-bottom: 8px;
				}
			}
		}
	}

	#store {
		.section-content {
			img {
				max-width: 86%;
				border: 4px solid #f8ffb5;
				border-radius: 4px;
				transition: 0.18s;
			}
			img:hover {
				filter: sepia(28%) saturate(50%);
				transition: 0.6s;
			}
		}

		a {
			text-decoration: none;
		}
	}

	#sponsor {
		a {
			display: block;
			font-size: 22px;
			text-decoration: none;

			img {
				display: block;
				max-width: 86%;
				margin: 0 auto;
				margin-bottom: 40px;
			}
		}
	}
</style>
