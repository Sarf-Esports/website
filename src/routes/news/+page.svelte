<!-- © 2022 - 2023 REVATI -->
<script>
	import { _ } from 'svelte-i18n';

	import SectionTitle from '../section_title.svelte';
	import NewsSlider from '$lib/components/news_slider.svelte';

	const head = {
		title: 'REVATI | NEWS',
		desc: 'REVATIの最新情報をお届けします。'
	};
</script>

<svelte:head>
	<title>{head.title}</title>
	<meta name="title" content={head.title} />
	<meta name="description" content={head.desc} />

	<meta property="og:title" content={head.title} />
	<meta property="og:description" content={head.desc} />
	<meta property="og:url" content="https://revati.jp/news" />
	<meta property="og:image" content="https://revati.jp/images/logos/revati_large.png" />
	<meta property="og:type" content="article" />
</svelte:head>

<main>
	<div class="container">
		<section id="news">
			<SectionTitle name="news" />
			<p>{$_('news.desc')}</p>
			<div class="section-content"><NewsSlider /></div>
		</section>
	</div>
</main>

<style lang="scss" global>
	@use '/assets/stylesheets/style';
	@use '/assets/stylesheets/util';

	#news p {
		font-size: 24px;
		margin-bottom: 48px;
	}
</style>
