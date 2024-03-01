<!-- © 2022 REVATI -->
<script lang="ts">
	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';
	import { browser } from '$app/environment';
	import { idToDate } from '$lib/util';
	import { date as dateI18n } from 'svelte-i18n';
	import { shake } from '$lib/util';
	import { fly } from 'svelte/transition';

	export let articles: ArticleMetadata[];
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;

	let isTouchDevice = false;

	if (browser) {
		if (!isTouchDevice) {
			document.addEventListener(
				'touchstart',
				function () {
					isTouchDevice = true;
				},
				{ passive: false }
			);
		}

		window.onscroll = () => {
			fuckNewsArrows();
		};

		window.addEventListener('resize', function () {
			fuckNewsArrows();
		});
	}

	let sliderIndex = 0;
	let sliderIndexPrev = 0;
	$: sliderLen = articles.length;

	function flipPrev(btn: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (btn.target === null) console.error('button target is null');

		sliderIndexPrev = sliderIndex;

		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		let btnParent = btn.target.parentElement;
		/* eslint-enable @typescript-eslint/ban-ts-comment */

		// Whether the previous item is not exist.
		if (sliderIndex == 0) {
			btnParent.children[0].classList.add('inactive');
			shake(btnParent);
		} else {
			sliderIndex--;
			applyNews(btnParent);
		}
	}

	function flipNext(btn: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (btn.target === null) console.error('button target is null');
		sliderIndexPrev = sliderIndex;

		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		let btnParent = btn.target.parentElement;
		/* eslint-enable @typescript-eslint/ban-ts-comment */

		// Whether the next item is not exist.
		if (sliderIndex + 1 == sliderLen) {
			btnParent.children[1].classList.add('inactive');
			shake(btnParent);
		} else {
			sliderIndex++;
			applyNews(btnParent);
		}
	}

	function applyNews(btn_parent: { children: { classList: DOMTokenList }[] }) {
		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		let news = btn_parent.children[2].children;
		/* eslint-enable @typescript-eslint/ban-ts-comment */
		let arrowLeft = btn_parent.children[0].classList;
		let arrowRight = btn_parent.children[1].classList;

		let mid = news[sliderIndex].classList;
		mid.remove('left-item');
		mid.remove('right-item');
		mid.add('middle-item');

		// Whether the previous item is exist.
		if (sliderIndex != 0) {
			let left = news[sliderIndex - 1].classList;
			left.remove('middle-item');
			left.remove('hidden');
			left.add('left-item');
			arrowLeft.remove('inactive');
		} else {
			arrowLeft.add('inactive');
		}

		// Whether the next item is exist.
		if (sliderIndex + 1 != sliderLen) {
			let right = news[sliderIndex + 1].classList;
			right.remove('middle-item');
			right.remove('hidden');
			right.add('right-item');
			arrowRight.remove('inactive');
		} else {
			arrowRight.add('inactive');
		}

		// Whether the two previous item is exist.
		if (1 < sliderIndex) {
			let beyondLeft = news[sliderIndex - 2].classList;
			beyondLeft.remove('left-item');
			beyondLeft.add('hidden');
		}

		// Whether the two next item is exist.
		if (sliderIndex + 2 < sliderLen) {
			let beyondRight = news[sliderIndex + 2].classList;
			beyondRight.remove('right-item');
			beyondRight.add('hidden');
		}
	}

	function fuckNewsArrows() {
		let arrows = document.getElementsByClassName('arrow');
		[...arrows].forEach(
			(a) =>
				/* eslint-disable @typescript-eslint/ban-ts-comment */
				// @ts-ignore
				(a.style.width = a.clientHeight + 'px')
			/* eslint-enable @typescript-eslint/ban-ts-comment */
		);
	}

	function counterFade() {
		const offset = 28;
		return offset * (sliderIndex < sliderIndexPrev ? 1 : -1);
	}
</script>

<button on:click={(self) => flipPrev(self)} class="arrow inactive" id="arrow-left">&lt</button>
<button
	on:click={(self) => flipNext(self)}
	class="arrow{sliderLen == 1 ? ' inactive' : ''}"
	id="arrow-right">&gt</button
>
<ul id="news-slider">
	{#each articles as { title, slug }, i}
		{@const nonUndefinedSlug = slug ?? 'unreachable'}
		{@const date = idToDate(nonUndefinedSlug)}
		<li
			class="{i == -1
				? 'left-item'
				: i == 0
					? 'middle-item'
					: i == 1
						? 'right-item'
						: 'hidden'}{isTouchDevice ? ' mobile' : ''}"
		>
			<a href="./news/articles/{slug}" tabindex="-1">
				<img
					src="/images/news/thumbnails/{slug}.{thumbnailImgFmts?.[nonUndefinedSlug] ?? null}"
					alt=""
				/>
				<h1>{title}</h1>
				<h3><time datetime={date.toISOString()}>{$dateI18n(date, { format: 'long' })}</time></h3>
			</a>
		</li>
	{/each}
</ul>
<h2>
	{#key sliderIndex}<span
			in:fly|global={{ y: counterFade() }}
			out:fly|global={{ x: 11, y: -counterFade() }}
			style="display:inline-block;">{sliderIndex + 1}</span
		>{/key}<span class="split-line">/</span>{sliderLen}
</h2>

<style lang="scss">
	@use '/assets/stylesheets/news_slider';
</style>
