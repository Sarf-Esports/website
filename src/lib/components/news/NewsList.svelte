<!-- © 2022 REVATI -->
<script lang="ts">
	import ChevronArrow from './util/ChevronArrow.svelte';
	import ArticleCard from './ArticleCard.svelte';

	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';
	import { fly } from 'svelte/transition';

	export let articles: ArticleMetadata[];
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;
	export let showAll: boolean = false;

	const MAX_ARTICLES = 4;
	let currentPage = 0;

	const pages = Math.ceil(articles.length / MAX_ARTICLES);

	$: isFirstPage = currentPage <= 0;
	$: isLastPage = pages - 1 <= currentPage;

	let flipTo: 1 | -1 = 1;

	function pageFlip(to: number, isAbsolute = false) {
		const toAbs = isAbsolute ? to : currentPage + to;
		if ((toAbs < currentPage && !isFirstPage) || (currentPage < toAbs && !isLastPage)) {
			flipTo = toAbs < currentPage ? -1 : 1;
			currentPage = toAbs;
		}
	}

	function pageFlipAnim(node: Element, inOrOut: 'in' | 'out') {
		if (showAll) return fly(node, { duration: 300, y: 128 });

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

<svelte:window
	on:keydown={(e) => {
		const key = e.key;
		if (key == 'ArrowLeft') pageFlip(-1);
		else if (key == 'ArrowRight') pageFlip(1);
	}}
/>

{#if !showAll}
	<div class="arrows">
		<button on:click={() => pageFlip(-1)} class="arrow back-arrow" class:inactive={isFirstPage}
			><ChevronArrow direction="left" transparent={isFirstPage} /></button
		><button on:click={() => pageFlip(1)} class="arrow forward-arrow" class:inactive={isLastPage}
			><ChevronArrow direction="right" transparent={isLastPage} /></button
		>
	</div>
{/if}

<ul class="articles" class:show-all={showAll}>
	{#each showAll ? articles : articles.slice(currentPage * MAX_ARTICLES, (currentPage + 1) * MAX_ARTICLES) as meta (meta.slug)}
		<li class="article" in:pageFlipAnim|global={'in'} out:pageFlipAnim|global={'out'}>
			<ArticleCard {meta} {thumbnailImgFmts} />
		</li>
	{/each}
</ul>

{#if !showAll}
	<ul class="indicators">
		<!-- ↓ Wait until Svelte become can omit the `as` clause. See: https://github.com/sveltejs/svelte/issues/8348 -->
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array(pages) as _, i}
			<li>
				<button
					class="indicator"
					class:active={i == currentPage}
					on:click={() => pageFlip(i, true)}
				/>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	@use '/assets/stylesheets/news/news_list';
</style>
