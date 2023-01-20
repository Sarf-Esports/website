<!-- © 2022 - 2023 REVATI -->
<script>
	import { news_list } from '$lib/data/news.js';

	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	/** @type {string} */
	export let date;

    /** @type {string} */
    export let text;

	let news = news_list.find((a) => a.date === date);
	let title = news ? news.title : undefined;

	let img_path = `/images/news/${date}.png`;

	/**
	 * Returns a formatted date string.
	 */
	function fmt_date() {
		const y = date.slice(0, 4).replace(/^0+/, '');
		const m = date.slice(4, 6).replace(/^0+/, '');
		const d = date.slice(6, 8).replace(/^0+/, '');
		return `${y}/${m}/${d}`;
	}

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
			<h2>{fmt_date()}</h2>
			<hr />
			<p>{@html text}</p>
		</div>
	</div>
</main>

<Footer />

<style lang="scss">
	@import '/assets/stylesheets/variables.scss';

	main {
		min-height: 100vh;
		background-color: $secondary-color;

		#content {
			margin: 160px 0 64px 0;
			position: relative;
			z-index: 1;

			img {
				max-width: 86%;
                max-height: 64vh;
				margin-top: 32px;
			}

			h1 {
				font-size: 32px;
				font-weight: 900;
                padding: 0 26px;
			}

			h2 {
				font-size: 20px;
				font-weight: 100;
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
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-position: 50%;
			opacity: 0.2;
			mask-image: linear-gradient(to bottom, black, transparent);
		}
	}
</style>
