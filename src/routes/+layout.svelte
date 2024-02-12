<!-- © 2022 REVATI -->
<script>
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import { copyright, SITE_URL } from '$lib/variables';
	import { browser } from '$app/environment';

	if (browser) {
		window.addEventListener('resize', set_vh001);
		set_vh001();
	}

	/**
	 * Sets CSS variable `--vh001`.
	 * Must be called in the browser.
	 */
	function set_vh001() {
		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="format-detection" content="telephone=no,address=no,email=no" />

	<meta property="og:site_name" content="REVATI" />
	<meta property="og:locale" content="ja_JP" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={SITE_URL} />
	<!-- ↓ $primary-color -->
	<meta name="theme-color" content="#154c83" />

	<meta name="keywords" content="sarf,revati" />
	<meta name="author" content="Rinrin.rs <rinrin0413.valley@gmail.com>, GEN3987" />
	<meta name="copyright" content={copyright} />

	<link rel="icon" href="/images/logos/revati/icon_180px_oxipng.png?v=3" />
</svelte:head>

<Header />

<slot />

<Footer />
