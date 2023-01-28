<!-- © 2022 - 2023 REVATI -->
<script>
	import { news_list } from '$lib/data/news.js';
	import { fmt_date } from '$lib/util.js';

	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	/** @type {string} */
	export let date;

	/** @type {string} */
	export let text;

	let news = news_list.find((a) => a.date === date);
	let title = news ? news.title : undefined;

	let img_path = `/images/news/${date}.png`;

	const head = { title: `REVATI | NEWS - ${title}` };
</script>

<svelte:head>
	<title>{head.title}</title>
	<meta name="title" content={head.title} />

	<meta property="og:title" content={head.title} />
	<meta property="og:url" content="https://revati.jp/news/articles/{date}" />
	<meta property="og:image" content="https://revati.jp{img_path}" />
	<meta property="og:type" content="article" />
</svelte:head>

<Header />

<main>
	<div class="container">
		<div id="bg" style={`background-image: url(${img_path});`} />
		<div id="content">
			<img src={img_path} alt="thumbnail" />
			<h1>{title}</h1>
			<h2>{fmt_date(date)}</h2>
			<hr />
			<p>{@html text}</p>
		</div>
	</div>
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
</main>

<Footer />

<style lang="scss">
	@import '/assets/stylesheets/variables.scss';
	@import '/assets/stylesheets/mixins.scss';

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

			h1 {
				font-weight: 900;
				padding: 0 26px;

				@include pc {
					font-size: 32px;
				}

				@include sp {
					font-size: 22px;
				}
			}

			h2 {
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

			p {
				max-width: 512px;
				margin: 32px auto 0 auto;
				padding: 0 20px;
				text-align: left;
				font-size: 18px;
				letter-spacing: 1.2px;
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

		> a {
			display: block;
			font-size: 18px;
			margin-bottom: 64px;
		}
	}
</style>
