<!-- © 2022 REVATI -->
<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';

	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';

	export let articles: ArticleMetadata[];
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;
</script>

<ul>
	{#each articles as meta}
		<li><ArticleCard {meta} {thumbnailImgFmts} /></li>
	{/each}
</ul>

<a href="/news">ALL</a>

<style lang="scss">
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
