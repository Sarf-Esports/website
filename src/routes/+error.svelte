<!-- © 2022 - 2023 REVATI -->
<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	const head = { title: '404 Not Found' };
</script>

<svelte:head>
	<title>REVATI | {head.title}</title>
</svelte:head>

<Header />

<main>
	<div>
		<div>
			<h1>404 <ruby>Page<rt>パゲ</rt></ruby> Not Found</h1>
			<p>
				申し訳御座いません。誠に遺憾。<br />
				お探しのページは見つかりませんでした。<br />
				<a href="/">トップページへ戻る</a>
			</p>
		</div>
	</div>
</main>

<Footer />

<style lang="scss">
	@import '/assets/stylesheets/variables.scss';

	main {
		text-align: center;
		background-color: $secondary-color;
		min-height: 86vh;

		> div {
			background-image: url('/images/logos/revati_large_dark.png');
			background-repeat: no-repeat;
			background-position: center;

			div {
				width: 100%;
				height: 100%;
				padding-top: 40vh;
				background-color: #111111cc;

				h1 {
					font-size: 42px;
					text-decoration: underline;
					transition: 0.6s;

					rt {
						margin-bottom: -16px;
					}
				}

				h1:hover {
					filter: drop-shadow(-6px 2px 0 #777777);
					transition: 0.2s;
				}

				p {
					font-size: 24px;
					margin-top: 32px;
					filter: drop-shadow(1px 1px 0 #030303) drop-shadow(1px -1px 0 #030303);

					a {
						color: #17d8d8;
						font-weight: 900;
						text-decoration: underline;
						transition: 0.2s;
					}

					a:hover {
						color: #7effb4;
					}

					a:active {
						color: #e6ff9a;
					}
				}
			}
		}
	}
</style>
