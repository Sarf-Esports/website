<!-- © 2022 REVATI -->
<script lang="ts">
	import HbBtn from './HamburgerButton.svelte';
	import Socials from '../Socials.svelte';
	import LangSwitcher from '../LangSwitcher.svelte';
	import Contact from './Contact.svelte';

	import { browser } from '$app/environment';
	import { HEADER_ITEMS, NON_SECTION_ITEMS } from '$lib/scripts/data/HEADER_ITEMS';
	import { _ } from 'svelte-i18n';
	import { COPYRIGHT } from '$lib/scripts/variables';
	import { toggleScrollPrevention } from '$lib/scripts/util';
	import { isContactModalOpened } from '$lib/scripts/stores';
	import { page } from '$app/stores';

	$: url = $page.url;
	let currentSection = '';

	if (browser) {
		window.addEventListener('scroll', function () {
			if (url !== undefined && url.pathname === '/') {
				let sectionPositions = HEADER_ITEMS.filter((i) => !NON_SECTION_ITEMS.includes(i)).map(
					(item) => {
						return {
							item,
							relPos:
								document.getElementById(item)!.getBoundingClientRect().top! -
								window.innerHeight * 0.45
						};
					}
				);
				sectionPositions.forEach(({ item, relPos }) => {
					if (relPos < 0) currentSection = item;
				});
				if (0 <= sectionPositions[0].relPos) currentSection = 'top';
			} else {
				currentSection = '';
			}
		});
	}

	let isDrawerMenuOpened = false;

	/**
	 * Toggles drawer menu open/close.
	 *
	 * **＊ Must be called in the browser environment.**
	 */
	function toggleDrawerMenu(open: boolean) {
		isDrawerMenuOpened = open;
		toggleScrollPrevention(isDrawerMenuOpened);

		document.documentElement.style.setProperty('--vh001', window.innerHeight * 0.01 + 'px');
	}
</script>

<div id="header-bg" class:visible={isDrawerMenuOpened} />

<header class:open={isDrawerMenuOpened} inert={$isContactModalOpened}>
	<nav>
		<a href="/" draggable="false" tabindex="-1"><span title={$_('header.back')} /></a>
		<HbBtn
			isOpened={isDrawerMenuOpened}
			on:toggle={(e) => {
				toggleDrawerMenu(e.detail.isOpened);
			}}
		/>
		<ul>
			{#each HEADER_ITEMS as item}
				{#if item === 'contact'}
					<li class="item-contact">
						<button class:active={false} on:click={() => isContactModalOpened.update(() => true)}
							>CONTACT</button
						>
					</li>
				{:else}
					<li>
						<a
							href="/#{item}"
							class:active={currentSection === ''
								? url.hash === '#' + item || url.pathname.split('/')[1] === item
								: currentSection === item}
							on:click={() => {
								toggleDrawerMenu(false);
							}}>{item.toUpperCase()}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
		<h3>{COPYRIGHT}</h3>
	</nav>
</header>

<Contact />

<div id="header2" class:open={isDrawerMenuOpened} inert={!isDrawerMenuOpened || $isContactModalOpened}>
	<div class="socials">
		<Socials
			style="
				justify-content: left;
				margin-top: 5vh;
				margin-left: 5vh;
				margin-bottom: calc(13vh - 56px);
			"
		/>
	</div>
	<div class="lang-switcher"><LangSwitcher /></div>
</div>

<style lang="scss">
	@use '$lib/stylesheets/header/header';
</style>
