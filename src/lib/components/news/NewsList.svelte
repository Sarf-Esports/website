<!-- © 2022 REVATI -->
<script lang="ts">
	import ChevronArrow from './util/ChevronArrow.svelte';
	import ArticleCard from './ArticleCard.svelte';

	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';

	export let articles: ArticleMetadata[];
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;

	const MAX_ARTICLES = 4;
	let currentPage = 0;
	$: isFirstPage = currentPage <= 0;
	$: isLastPage = Math.floor(articles.length / MAX_ARTICLES) - 1 <= currentPage;
</script>

<div class="arrows">
	<button
		on:click={() => {
			if (!isFirstPage) currentPage--;
		}}
		class="back-arrow"
		class:inactive={isFirstPage}><ChevronArrow direction="left" /></button
	><button
		on:click={() => {
			if (!isLastPage) currentPage++;
		}}
		class="forward-arrow"
		class:inactive={isLastPage}><ChevronArrow direction="right" /></button
	>
</div>

<ul>
	{#each articles.slice(currentPage * MAX_ARTICLES, (currentPage + 1) * MAX_ARTICLES) as meta (meta.slug)}
		<li><ArticleCard {meta} {thumbnailImgFmts} /></li>
	{/each}
</ul>

<style lang="scss">
	.arrows {
		position: relative;
		top: 232px;
		right: 44px;
	}

	button {
		position: absolute;
		background: none;
		border: none;
		cursor: pointer;
		opacity: 0.7;
		transition: 0.2s;

		// 1090px(threshold) * 0.28 - 233px = 72px
		$arrow-margin: min(28vw - 233px, 72px);

		&:nth-child(1) {
			left: calc($arrow-margin * -1);
		}

		&:nth-child(2) {
			$arrow-width: 94px;
			right: calc(($arrow-margin + $arrow-width) * -1);
		}

		&:hover {
			opacity: 1;
		}

		&.inactive {
			opacity: 0;
			cursor: default;
		}
	}

	.back-arrow {
		padding-left: 26px;
		transform: translateY(-1.5px);
	}

	.forward-arrow {
		padding: 0 15px;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 auto;
		list-style: none;
	}
</style>
