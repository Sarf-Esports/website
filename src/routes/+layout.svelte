<!-- © 2022 REVATI -->
<script>
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { COPYRIGHT, SITE_URL } from '$lib/variables';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	if (browser) {
		window.addEventListener('resize', setVh001);
		setVh001();
	}

	/**
	 * Sets CSS variable `--vh001`.
	 * Must be called in the browser.
	 */
	function setVh001() {
		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="format-detection" content="telephone=no,address=no,email=no" />

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

<slot />

<Footer />
