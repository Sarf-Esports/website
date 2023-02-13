<!-- © 2022 - 2023 REVATI -->
<script lang="ts">
	import { copyright } from '$lib/variables.js';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="format-detection" content="telephone=no,address=no,email=no" />

	<meta property="og:site_name" content="REVATI" />
	<meta property="og:locale" content="ja_JP" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://revati.jp" />
	<meta name="theme-color" content="#d1ff46" />

	<meta name="keywords" content="sarf,revati" />
	<meta name="author" content="Rinrin.rs <rinrin0413.valley@gmail.com>, GEN3987" />
	<meta name="copyright" content={copyright} />
</svelte:head>

<Header />

<slot />

<Footer />
