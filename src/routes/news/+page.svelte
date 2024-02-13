<!-- © 2022 REVATI -->
<script>
	import SectionTitle from '../SectionTitle.svelte';
	import NewsSlider from '$lib/components/newsSlider.svelte';

	import { SITE_URL } from '$lib/variables';
	import { _ } from 'svelte-i18n';

	const HEAD = {
		title: 'REVATI | NEWS',
		desc: 'REVATIの最新情報をお届けします。'
	};
</script>

<svelte:head>
	<title>{HEAD.title}</title>
	<meta name="title" content={HEAD.title} />
	<meta name="description" content={HEAD.desc} />

	<meta property="og:title" content={HEAD.title} />
	<meta property="og:description" content={HEAD.desc} />
	<meta property="og:url" content="{SITE_URL}/news" />
	<meta property="og:image" content="{SITE_URL}/images/logos/revati/header_mini.png" />
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
