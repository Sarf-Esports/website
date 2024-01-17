<!-- © 2022 REVATI -->
<script lang="ts">
	import NewsDate from '$lib/components/news_date.svelte';

	import { browser } from '$app/environment';
	import { news_list } from '$lib/data/news';
	import { shake } from '$lib/util';
	import { fly } from 'svelte/transition';

	let is_touch_device = false;

	if (browser) {
		if (!is_touch_device) {
			document.addEventListener(
				'touchstart',
				function () {
					is_touch_device = true;
				},
				{ passive: false }
			);
		}

		window.onscroll = () => {
			fuck_news_arrows();
		};

		window.addEventListener('resize', function () {
			fuck_news_arrows();
		});
	}

	let slider_index = 0;
	let slider_index_prev = 0;
	let slider_len = news_list.filter((n) => n.published).length;

	function news_prev(btn: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (btn.target === null) console.error('button target is null');

		slider_index_prev = slider_index;

		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		let btn_parent = btn.target.parentElement;
		/* eslint-enable @typescript-eslint/ban-ts-comment */

		// Whether the previous item is not exist.
		if (slider_index == 0) {
			btn_parent.children[0].classList.add('inactive');
			shake(btn_parent);
		} else {
			slider_index--;
			apply_news(btn_parent);
		}
	}

	function news_next(btn: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (btn.target === null) console.error('button target is null');
		slider_index_prev = slider_index;

		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		let btn_parent = btn.target.parentElement;
		/* eslint-enable @typescript-eslint/ban-ts-comment */

		// Whether the next item is not exist.
		if (slider_index + 1 == slider_len) {
			btn_parent.children[1].classList.add('inactive');
			shake(btn_parent);
		} else {
			slider_index++;
			apply_news(btn_parent);
		}
	}

	function apply_news(btn_parent: { children: { classList: DOMTokenList }[] }) {
		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		let news = btn_parent.children[2].children;
		/* eslint-enable @typescript-eslint/ban-ts-comment */
		let allow_left = btn_parent.children[0].classList;
		let allow_right = btn_parent.children[1].classList;

		let mid = news[slider_index].classList;
		mid.remove('left-item');
		mid.remove('right-item');
		mid.add('middle-item');

		// Whether the previous item is exist.
		if (slider_index != 0) {
			let left = news[slider_index - 1].classList;
			left.remove('middle-item');
			left.remove('hidden');
			left.add('left-item');
			allow_left.remove('inactive');
		} else {
			allow_left.add('inactive');
		}

		// Whether the next item is exist.
		if (slider_index + 1 != slider_len) {
			let right = news[slider_index + 1].classList;
			right.remove('middle-item');
			right.remove('hidden');
			right.add('right-item');
			allow_right.remove('inactive');
		} else {
			allow_right.add('inactive');
		}

		// Whether the two previous item is exist.
		if (1 < slider_index) {
			let beyond_left = news[slider_index - 2].classList;
			beyond_left.remove('left-item');
			beyond_left.add('hidden');
		}

		// Whether the two next item is exist.
		if (slider_index + 2 < slider_len) {
			let beyond_right = news[slider_index + 2].classList;
			beyond_right.remove('right-item');
			beyond_right.add('hidden');
		}
	}

	function fuck_news_arrows() {
		let arrows = document.getElementsByClassName('arrow');
		[...arrows].forEach(
			(a) =>
				/* eslint-disable @typescript-eslint/ban-ts-comment */
				// @ts-ignore
				(a.style.width = a.clientHeight + 'px')
			/* eslint-enable @typescript-eslint/ban-ts-comment */
		);
	}

	function counter_fade() {
		const offset = 28;
		return offset * (slider_index < slider_index_prev ? 1 : -1);
	}
</script>

<button on:click={(self) => news_prev(self)} class="arrow inactive" id="arrow-left">&lt</button>
<button
	on:click={(self) => news_next(self)}
	class="arrow{slider_len == 1 ? ' inactive' : ''}"
	id="arrow-right">&gt</button
>
<ul id="news-slider">
	{#each news_list as { published, date, title }, i}
		{#if published}
			<li
				class="{i == -1
					? 'left-item'
					: i == 0
					? 'middle-item'
					: i == 1
					? 'right-item'
					: 'hidden'}{is_touch_device ? ' mobile' : ''}"
			>
				<a href="./news/articles/{date}" tabindex="-1">
					<img src="/images/news/{date}.png" alt="news thumbnail" />
					<h1>{title}</h1>
					<h3><NewsDate {date} /></h3>
				</a>
			</li>
		{/if}
	{/each}
</ul>
<h2>
	{#key slider_index}<span
			in:fly={{ y: counter_fade() }}
			out:fly={{ x: 11, y: -counter_fade() }}
			style="display:inline-block;">{slider_index + 1}</span
		>{/key}<span class="split-line">/</span>{slider_len}
</h2>

<style lang="scss">
	@use '/assets/stylesheets/news_slider';
</style>
