<!-- © 2022 REVATI -->
<script lang="ts">
	import ChevronArrow from './util/ChevronArrow.svelte';
	import ArticleCard from './ArticleCard.svelte';

	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';
	import { fly } from 'svelte/transition';

	export let articles: ArticleMetadata[];
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;

	const MAX_ARTICLES = 4;
	let currentPage = 0;
	$: isFirstPage = currentPage <= 0;
	$: isLastPage = Math.floor(articles.length / MAX_ARTICLES) - 1 <= currentPage;

	let flipTo: 1 | -1 = 1;

	function pageFlip(node: Element, inOrOut: 'in' | 'out') {
		const ANIM = {
			duration: { in: 700, out: 200 },
			offset: { in: 1024, out: -256 }
		};

		return fly(node, {
			duration: ANIM.duration[inOrOut],
			x: ANIM.offset[inOrOut] * flipTo
		});
	}
</script>

<div class="arrows">
	<button
		on:click={() => {
			flipTo = -1;
			if (!isFirstPage) currentPage--;
		}}
		class="back-arrow"
		class:inactive={isFirstPage}><ChevronArrow direction="left" invisible={isFirstPage} /></button
	><button
		on:click={() => {
			flipTo = 1;
			if (!isLastPage) currentPage++;
		}}
		class="forward-arrow"
		class:inactive={isLastPage}><ChevronArrow direction="right" invisible={isLastPage} /></button
	>
</div>

<ul>
	{#each articles.slice(currentPage * MAX_ARTICLES, (currentPage + 1) * MAX_ARTICLES) as meta (meta.slug)}
		<li in:pageFlip|global={'in'} out:pageFlip|global={'out'}>
			<ArticleCard {meta} {thumbnailImgFmts} />
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '/assets/stylesheets/news/news_list';
</style>
