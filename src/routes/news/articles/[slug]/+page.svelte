<!-- © 2022 - 2023 REVATI -->
<script lang="ts">
	import { fmt_date } from '$lib/util.js';

	import type { PageData } from './$types';

	export let data: PageData;
	const metadata = data.frontmatter;

	const head = { title: `REVATI | NEWS - ${metadata.title}` };
	let thumbnail_path = `/images/news/${metadata.date}.png`;
</script>

<svelte:head>
	<title>{head.title}</title>
	<meta name="title" content={head.title} />

	<meta property="og:title" content={head.title} />
	<meta property="og:url" content="https://revati.jp/news/articles/{metadata.date}" />
	<meta property="og:image" content="https://revati.jp{thumbnail_path}" />
	<meta property="og:type" content="article" />
</svelte:head>

<main>
	<div class="container">
		<div id="bg" style={`background-image: url(${thumbnail_path});`} />
		<div id="content">
			<img src={thumbnail_path} alt="thumbnail" />
			<h1>{metadata.title}</h1>
			<h2>{fmt_date(metadata.date)}</h2>
			<hr />
			<article><svelte:component this={data.component} /></article>
			<a href="/news"
				>ニュース一覧へ戻る
				<!-- 
                    Bootstrap Icons - Box arrow in down left
                    https://icons.getbootstrap.com/icons/box-arrow-in-down-left
                    
                    Copyright (c) 2019 The Bootstrap Authors
                    under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE.md
                -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-in-down-left"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"
					/>
				</svg></a
			>
		</div>
	</div>
</main>

<style lang="scss" global>
	@import '/assets/stylesheets/variables.scss';
	@import '/assets/stylesheets/mixins.scss';
	@import '/assets/stylesheets/style.scss';

	@font-face {
		font-family: 'Zen Kaku Gothic Antique Bold';
		src: url('/fonts/Zen_Kaku_Gothic_Antique/ZenKakuGothicAntique-Bold.ttf');
	}

	main {
		min-height: 100vh;
		background-color: $secondary-color;

		#content {
			margin: 128px 0 64px 0;
			position: relative;
			z-index: 1;

			> img {
				max-width: 86%;
				max-height: 48vh;
				margin-top: 32px;
				border-radius: 4px;
			}

			> h1 {
				font-weight: 900;
				padding: 0 26px;

				@include pc {
					font-size: 32px;
				}

				@include sp {
					font-size: 22px;
				}
			}

			> h2 {
				display: inline-block;
				font-weight: 100;
				letter-spacing: 2px;
				background-color: #f0ffff13;
				padding: 0 16px 4px 16px;
				border-radius: 2.6px;
				border: 0.8px solid white;

				@include pc {
					font-size: 20px;
				}

				@include sp {
					font-size: 17px;
				}
			}

			> article {
				max-width: 512px;
				margin: 32px auto 0 auto;
				padding: 0 20px;
				text-align: left;
				font-size: 19px;
				letter-spacing: 1.2px;

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-weight: 900;
					letter-spacing: 1.2px;
				}

				h1 {
					font-size: 32px;
				}

				h2 {
					font-size: 28px;
				}

				h3 {
					font-size: 24px;
				}

				h4 {
					font-size: 20px;
				}

				h5 {
					font-size: 16px;
				}

				h6 {
					font-size: 14px;
				}

				img {
					max-width: 100%;
				}

				blockquote {
					margin: 0;
					border-left: 4px solid #808080;
					padding-left: 20px;
					border-radius: 2px;
				}

				code {
					background-color: #0c0c0c;
					padding: 6px;
					font-size: 16px;
					border-radius: 4px;
					font-family: monospace;
					color: #ffedc7;
				}

				pre code {
					display: block;
					padding: 16px 20px;
					border-radius: 2px;
					border: 2px solid #2b2b2b;
					color: #d8e6db;
				}

				table {
					margin: 12px auto;
					border: 2px solid #2b2b2b;
					border-radius: 2px;
					background-color: #2b2b2b;
					overflow: hidden;

					th,
					td {
						padding: 6px 8px;
						border: 1px solid #2b2b2b;
					}

					th {
						background-color: #1a1a1a;
					}

					td {
						background-color: $secondary-color;
					}
				}

				strong {
					font-family: 'Zen Kaku Gothic Antique Bold';
					font-weight: bold;
					color: white;
				}

				sub, sup {
					font-size: 12px;
				}
			}

			> a {
				display: block;
				font-size: 18px;
				margin-top: 64px;
			}
		}

		#bg {
			position: absolute;
			top: $scroll-offset;
			left: 0;
			width: 100%;
			height: 100vh;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-position: 50%;
			opacity: 0.2;
			$mask: linear-gradient(to bottom, black, transparent);
			mask-image: $mask;
			-webkit-mask-image: $mask;
		}
	}
</style>