<!-- © 2022 - 2023 REVATI -->
<script lang="ts">
	import { browser } from '$app/environment';

	import { add_class_at_scroll } from '$lib/util';

	import SectionTitle from './section_title.svelte';
	import NewsSlider from './news_slider.svelte';
	import MemberLists from './member_lists.svelte';
	import LinkIcon from '$lib/components/link_icon.svelte';

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

	let op_container: HTMLDivElement;

	/** Loops playback the OP video at intervals. */
	function op_loop(video: Event & { currentTarget: EventTarget & HTMLVideoElement }) {
		let v = video.currentTarget;
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
		desc: '勝負の世界である以上、成績が低迷してしまうこともあると思います。そんなときでも私たちは物事の目的達成のために継続的に粘り強く努力することを厭わず 最後までやり遂げる無限のパワー・可能性を秘めています。'
	};
</script>

<svelte:head>
	<title>REVATI</title>
	<meta name="title" content={head.title} />
	<meta name="description" content={head.desc} />

	<meta property="og:title" content={head.title} />
	<meta property="og:description" content={head.desc} />
	<meta property="og:url" content="https://revati.jp" />
	<meta property="og:image" content="https://revati.jp/images/logos/revati_large.png" />
	<meta property="og:type" content="website" />
</svelte:head>

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
		</section>
	</div>

	<div class="container">
		<section id="news">
			<SectionTitle name="news" />
			<div class="section-content"><NewsSlider /></div>
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
			<div class="section-content">
				<img src="/images/store_thumbnail.webp" alt="store thumbnail" loading="lazy" />
				<a
					href="https://suzuri.jp/REVATI"
					class="go-to-store"
					target="_blank"
					rel="noopener noreferrer"
					draggable="false"
					>お買い求めはこちら
					<LinkIcon size="20px" />
				</a>
			</div>
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

<style lang="scss" global>
	@use '/assets/stylesheets/variables.scss' as *;
	@use '/assets/stylesheets/mixins.scss' as *;

	@use '/assets/stylesheets/util.scss';
	@use '/assets/stylesheets/reveal_anim.scss';
	@use '/assets/stylesheets/style.scss';

	#op-container {
		display: block;
		background-image: url(/images/logos/revati_large_dark.png);
		background-repeat: no-repeat;
		background-position: center;
		height: 100vh;

		@include sp {
			background-size: 256vw;
			background-position: 50% calc(48% - 6vh);
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
			height: 128vw;
			background-size: 256vw;
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
			padding: 0 6px;
			margin: 0 16px;

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

				@include pc {
					font-size: 48px;
				}

				@include sp {
					font-size: 36px;
				}
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
				border-radius: 4px;
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
			border-radius: 6px;
			transition: 0.3s;

			$btn-shadow-col: #658111;

			&:hover,
			&:active {
				background-color: $primary-color;
				color: #1d1d1d;
				box-shadow: 0 12px 0 $btn-shadow-col;
			}

			&:active {
				box-shadow: 0 3px 0 $btn-shadow-col;
				transform: translateY(9px);
			}
		}
	}
</style>
