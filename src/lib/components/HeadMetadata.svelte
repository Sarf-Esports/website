<script lang="ts">
	import { SITE_URL, PAGE_FULL_TITLE_PART } from '$lib/scripts/variables';

	/**
	 * ex: `NEWS` (REVATI | NEWS)
	 *
	 * Default: `REVATI` (REVATI)
	 */
	export let title = 'REVATI';
	/** ex: `Rinrin.rs のホームページです。` */
	export let desc: string;
	/** ex: `{SITE_URL}/profile` */
	export let canonicalUrl: string;
	/**
	 * ex: `article`
	 *
	 * Default: `website`
	 */
	export let ogType: string = 'website';
	/**
	 * ex: `summary`
	 *
	 * Default: `summary_large_image`
	 */
	export let ogCardType: string = 'summary_large_image';
	/**
	 * Whether to set the thumbnail image.
	 *
	 * If `false`, set `<meta name="thumbnail" content=ABS_PATH />` and `<meta property="og:image" content=ABS_PATH />`.
	 *
	 * Default: `false`
	 */
	export let doesNotSetThumbnailImg = false;

	$: fullTitle = title === 'REVATI' ? title : PAGE_FULL_TITLE_PART + title;
	const absThumbnailPath = SITE_URL + '/images/logos/revati/header_mini_oxipng.png';
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={desc} />
	{#if !doesNotSetThumbnailImg}
		<meta name="thumbnail" content={absThumbnailPath} />
	{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content={ogType} />
	<meta name="twitter:card" content={ogCardType} />
	{#if !doesNotSetThumbnailImg}
		<meta property="og:image" content={absThumbnailPath} />
	{/if}

	<link rel="canonical" href={canonicalUrl} />
</svelte:head>
