<!-- © 2022 REVATI -->
<script lang="ts">
	import HeadMetadata from '$lib/components/HeadMetadata.svelte';
	import Article from './Article.svelte';
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { SITE_URL } from '$lib/scripts/variables';
	import { idToDate } from '$lib/scripts/util';
	import { _, date as dateI18n } from 'svelte-i18n';

	export let data: PageData;
	$: metadata = data.frontmatter;

	$: redirectTo = metadata.redirect;
	$: willRedirect = redirectTo !== undefined;
	onMount(() => {
		if (redirectTo !== undefined) goto(redirectTo);
	});

	$: paths = $page.url.pathname.split('/');
	$: pathnameLength = paths.length;
	$: isPathnameEndsWithSlash = paths[pathnameLength - 1] === '';
	$: slug = redirectTo ?? paths[pathnameLength - (isPathnameEndsWithSlash ? 2 : 1)];

	$: thumbnailImgFmt = data.thumbnailImgFmt;
	$: hasThumbnailImg = thumbnailImgFmt !== null;
	$: thumbnailImgPath = hasThumbnailImg
		? `/images/news/thumbnails/${slug}.` + thumbnailImgFmt
		: null;
	$: absThumbnailImgPath = SITE_URL + thumbnailImgPath;

	$: date = willRedirect ? null : idToDate(slug);
	let datePlus9h: Date;
	$: if (date !== null) {
		datePlus9h = new Date(date);
		datePlus9h.setHours(datePlus9h.getHours() + 9);
	}
</script>

<HeadMetadata
	title="NEWS - {metadata.title}"
	desc=""
	canonicalUrl={SITE_URL + '/news/articles/' + slug}
	ogType="article"
	doesNotSetThumbnailImg
/>

<svelte:head>
	<meta property="og:image" content={absThumbnailImgPath} />
	<meta name="thumbnail" content={absThumbnailImgPath} />

	{#if !metadata.indexed || willRedirect}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<div class="container">
	<div id="bg" style="background-image: url({thumbnailImgPath});" />
	<div id="content">
		<img src={thumbnailImgPath} alt="" />
		<h1>{metadata.title}</h1>
		{#if willRedirect}
			<p>
				{$_('news.wasRedirect.0')}<a href={redirectTo}>/news/articles/{redirectTo}</a>{$_(
					'news.wasRedirect.1'
				)}
			</p>
		{:else}
			{#if date !== null}
				<h2>
					<time datetime={datePlus9h.toISOString()}>{$dateI18n(date, { format: 'long' })}</time>
				</h2>
			{/if}
			<hr />
			<Article body={data.component} />
		{/if}
		<a href="/news">{$_('news.back')}<MaterialIcon kind="box-arrow-in-down-left" /></a>
	</div>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;
	@use '$lib/stylesheets/variables/mixin' as *;
	@use '$lib/stylesheets/variables/dimension' as *;

	.container {
		min-height: 100vh;
	}

	#content {
		margin: 128px 0 64px 0;
		position: relative;
		z-index: 1;

		> img {
			max-width: 86%;
			max-height: 48vh;
			margin-top: 32px;
			border-radius: 4px;
		}

		> h1,
		> h2 {
			font-weight: 400 !important;
		}

		> h1 {
			padding: 0 26px;

			@include pc {
				font-size: 32px;
			}

			@include sp {
				font-size: 22px;
			}
		}

		> h2 {
			display: inline-block;
			letter-spacing: 2px;
			background-color: #f0ffff13;
			padding: 0 16px 4px 16px;
			border-radius: 2.6px;
			border: 0.8px solid white;

			@include pc {
				font-size: 20px;
			}

			@include sp {
				font-size: 17px;
			}
		}

		> a {
			display: block;
			font-size: 18px;
			margin-top: 64px;
		}
	}

	#bg {
		position: absolute;
		top: $scroll-offset;
		left: 0;
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-position: 50%;
		opacity: 0.2;
		$mask: linear-gradient(to bottom, black, transparent);
		mask-image: $mask;
		-webkit-mask-image: $mask;
	}
</style>
