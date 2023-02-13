<!-- © 2022 - 2023 REVATI -->
<script>
	import LinkIcon from '$lib/components/link_icon.svelte';

	const head = { title: '404 Not Found' };
</script>

<svelte:head>
	<title>REVATI | {head.title}</title>
</svelte:head>

<main>
	<div>
		<div>
			<h1>404 <ruby>Page<rt>パゲ</rt></ruby> Not Found</h1>
			<p>
				申し訳御座いません。誠に遺憾。<br />
				お探しのページは見つかりませんでした。<br />
				<a href="/"
					>トップページへ戻る
					<LinkIcon size="18px" />
				</a>
			</p>
		</div>
	</div>
</main>

<style lang="scss">
	@import '/assets/stylesheets/variables.scss';
	@import '/assets/stylesheets/mixins.scss';

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
					text-decoration: underline;
					transition: 0.6s;

					@include pc {
						font-size: 42px;
					}

					@include sp {
						font-size: 28px;
					}

					&:hover {
						filter: drop-shadow(-6px 2px 0 #777777);
						transition: 0.2s;
					}

					rt {
						margin-bottom: -16px;
					}
				}

				p {
					margin-top: 32px;
					filter: drop-shadow(1px 1px 0 #030303) drop-shadow(1px -1px 0 #030303);

					@include pc {
						font-size: 24px;
					}

					@include sp {
						font-size: 18px;
					}

					a {
						font-size: 18px;
						color: #17d8d8;
						font-weight: 900;
					}
				}
			}
		}
	}
</style>
