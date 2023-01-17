<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';
	import { news_list } from '$lib/data/news.js';
	import { shake } from '$lib/util.js';
	import { fly } from 'svelte/transition';

	if (browser) {
		window.onscroll = () => {
			fuck_news_arrows();
		};

		window.addEventListener('resize', function () {
			fuck_news_arrows();
		});
	}

	let slider_index = 0;
	let slider_index_prev = 0;
	let slider_len = news_list.filter((n) => !n.is_hidden).length;

	/** @param {MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }} btn */
	function news_prev(btn) {
		slider_index_prev = slider_index;

		// @ts-ignore
		let btn_parent = btn.target.parentElement;

		// Whether the previous item is not exist.
		if (slider_index == 0) {
			btn_parent.children[0].classList.add('inactive');
			shake(btn_parent);
		} else {
			slider_index--;
			apply_news(btn_parent);
		}
	}

	/** @param {MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }} btn*/
	function news_next(btn) {
		slider_index_prev = slider_index;

		// @ts-ignore
		let btn_parent = btn.target.parentElement;

		// Whether the next item is not exist.
		if (slider_index + 1 == slider_len) {
			btn_parent.children[1].classList.add('inactive');
			shake(btn_parent);
		} else {
			slider_index++;
			apply_news(btn_parent);
		}
	}

	/** @param {{ children: { classList: any; }[]; }} btn_parent */
	function apply_news(btn_parent) {
		// @ts-ignore
		let news = btn_parent.children[2].children;
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
		// @ts-ignore
		[...arrows].forEach((a) => (a.style.width = a.clientHeight + 'px'));
	}

	function counter_fade() {
		const offset = 28;
		return offset * (slider_index < slider_index_prev ? 1 : -1);
	}
</script>

<button on:click={(self) => news_prev(self)} class="arrow inactive" id="arrow-left">&lt</button>
<button on:click={(self) => news_next(self)} class="arrow" id="arrow-right">&gt</button>
<ul id="news-slider">
	{#each news_list as { is_hidden, date, title }, i}
		{#if !is_hidden}
			<li
				class={i == -1 ? 'left-item' : i == 0 ? 'middle-item' : i == 1 ? 'right-item' : 'hidden'}
				data-index={i}
			>
				<a href="./news/{date}.html">
					<img src="/images/news/{date}.png" alt="news thumbnail" />
					<h1>{title}</h1>
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
		>{/key}
	<span class="split-line">/</span>{slider_len}
</h2>

<style lang="scss">
	@import '/assets/stylesheets/news_slider.scss';
</style>
