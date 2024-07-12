<!-- © 2022 REVATI -->
<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { COPYRIGHT, SITE_URL } from '$lib/variables';
	import { browser } from '$app/environment';
	import { HEADER_ITEMS } from '$lib/data/HEADER_ITEMS';
	import { SECTIONS } from '$lib/data/SECTIONS';
	import { page } from '$app/stores';

	let maxVh1: number;

	if (browser) {
		window.addEventListener('resize', () => {
			setVh001();
			if (maxVh1 < window.innerHeight) setMaxVh001();
		});
		setVh001();
		setMaxVh001();
	}

	/**
	 * Sets CSS variable `--vh001`.
	 *
	 * **＊ This function is intended to be used in the browser environment.**
	 */
	function setVh001() {
		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}

	/**
	 * Sets css variable `--max-vh001`.
	 *
	 * **＊ This function is intended to be used in the browser environment.**
	 */
	function setMaxVh001() {
		maxVh1 = window.innerHeight;
		document.documentElement.style.setProperty('--max-vh001', maxVh1 * 0.01 + 'px');
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="format-detection" content="telephone=no,address=no,email=no" />

	<!-- ▼ Google Fonts ▼ -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;900&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap&text={HEADER_ITEMS.join(
			''
		).toUpperCase()}"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap&text={SECTIONS.join(
			''
		).toUpperCase()}"
		rel="stylesheet"
	/>
	<!-- ▲ Google Fonts ▲ -->

	<meta property="og:site_name" content="REVATI" />
	{#if $page.url.pathname.startsWith('/news/articles/')}
		<meta property="og:type" content="article" />
	{:else}
		<meta property="og:type" content="website" />
		<meta property="og:image" content="{SITE_URL}/images/logos/revati/header_mini.png" />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:locale" content="ja_JP" />
	<meta name="twitter:site" content={SITE_URL} />
	<!-- ↓ $primary-color -->
	<meta name="theme-color" content="#154c83" />

	<meta name="keywords" content="sarf,revati" />
	<meta name="author" content="Rinrin.rs <rinrin0413.valley@gmail.com>, GEN3987" />
	<meta name="copyright" content={COPYRIGHT} />

	<link rel="icon" href="/images/logos/revati/icon_180px_oxipng.png?v=3" />
</svelte:head>

<Header />

<main><slot /></main>

<Footer />

<style lang="scss" global>
	@use '/assets/stylesheets/style';
</style>
