<!-- © 2022 - 2023 REVATI -->
<script>
	import Header from '$lib/header.svelte';
	import SectionTitle from '../section_title.svelte';
	import NewsSlider from '../news_slider.svelte';
	import Footer from '$lib/footer.svelte';

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
	<meta property="og:type" content="article" />
</svelte:head>

<Header />

<main>
	<div class="container">
		<section id="news">
			<SectionTitle name="news" />
            <p>
                REVATIの最新情報をお届けします:
            </p>
			<div class="section-content"><NewsSlider /></div>
		</section>
	</div>
</main>

<Footer />

<style lang="scss" global>
    @import '/assets/stylesheets/variables.scss';
	@import '/assets/stylesheets/style.scss';
	@import '/assets/stylesheets/util.scss';

    p {
        font-size: 24px;
        margin-bottom: 48px;
    }    
</style>
