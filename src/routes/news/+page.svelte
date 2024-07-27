<!-- © 2022 REVATI -->
<script lang="ts">
	import SectionTitle from '../SectionTitle.svelte';
	import NewsList from '$lib/components/news/NewsList.svelte';

	import type { PageData } from './$types';
	import { SITE_URL } from '$lib/scripts/variables';
	import { _ } from 'svelte-i18n';

	export let data: PageData;

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
</svelte:head>

<div class="container">
	<section class="no-max-width" id="news">
		<SectionTitle name="news" />
		<p>{$_('news.desc')}</p>
		<div class="content">
			<NewsList articles={data.articles} thumbnailImgFmts={data.thumbnailImgFmts} showAll />
		</div>
	</section>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	.no-max-width {
		max-width: none !important;

		p {
			font-size: 24px;
			margin-bottom: 48px;

			@include sp {
				font-size: 18px;
			}
		}
	}
</style>
