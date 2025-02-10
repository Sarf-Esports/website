<!-- © 2022 REVATI -->
<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { _ } from 'svelte-i18n';

	// If the aspect ratio of the images is not 16:9, the images may be distorted.
	const POSTER_LIST = [
		'goods-poster.webp',
		'news/thumbnails/20240301_test.png', // TMP: This image is temporary inserted for preview.
		'coaching-poster.webp', // TMP: This image is temporary inserted for preview.
		'news/thumbnails/20230206_test.png' // TMP: This image is temporary inserted for preview.
	];
</script>

<div
	class="carousel"
	use:emblaCarouselSvelte={{
		options: { loop: true },
		plugins: [
			Autoplay({
				delay: 4000,
				stopOnInteraction: false,
				stopOnMouseEnter: true
			})
		]
	}}
>
	<div class="carousel-container">
		{#each POSTER_LIST as poster, i}
			<img src={`/images/${poster}`} alt={$_('w.poster') + (i + 1)} />
		{/each}
	</div>
</div>

<p>{$_('goods.desc')}</p>

<a
	href="https://suzuri.jp/revati_jp"
	target="_blank"
	rel="noopener noreferrer"
	title={$_('goods.storeLinkTitle')}>{$_('goods.storeLink')}</a
>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	.carousel {
		overflow: hidden;
		border-radius: 2px;
	}
	.carousel-container {
		display: flex;

		img {
			min-width: 0;
			max-width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
			flex: 0 0 100%;
		}
	}

	p {
		margin: 14px auto !important;
		font-size: 17px !important;
		letter-spacing: -0.5px !important;
	}

	a {
		font-size: 22px;
	}
</style>
