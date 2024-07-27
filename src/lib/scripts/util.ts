// © 2022 REVATI

/**
 * Adds a specified class to specified elements when they are scrolled into view.
 *
 * @param elements - The elements to be observed.
 * @param className - The class to be added.
 *
 * **＊ Must be called in the browser environment.**
 *
 * # Example:
 *
 * ```svelte
 * <script lang="ts">
 *     import { onMount } from 'svelte';
 *     import { browser } from '$app/environment';
 *     import { addClassOnVisible } from '$lib/scripts/util';
 *
 *     onMount(fadeIn);
 *     if (browser) window.addEventListener('scroll', fadeIn);
 *
 *     function fadeIn() {
 *         addClassOnVisible(
 *             document.getElementsByClassName('foo'),
 *             'fade-in-up'
 *         );
 *     }
 * </script>
 *
 * <div class="foo" class:fade-in-up={false} />
 * <a class="foo" class:fade-in-up={false} />
 * ```
 */
export function addClassOnVisible(
	elements:
		| HTMLElement[]
		| HTMLCollectionOf<Element>
		| NodeListOf<Element>
		| HTMLElement
		| Element
		| null
		| undefined,
	className: string
) {
	if (elements instanceof Array) {
		elements.forEach((e) => addClassOnVisible_(e, className));
	} else if (elements instanceof HTMLCollection || elements instanceof NodeList) {
		[...elements].forEach((e) => addClassOnVisible_(e, className));
	} else if (elements instanceof HTMLElement || elements instanceof Element) {
		addClassOnVisible_(elements, className);
	}
}

/** **＊ Must be called in the browser environment.** */
function addClassOnVisible_(element: Element | HTMLElement, className: string) {
	if (element.getBoundingClientRect().top < window.innerHeight) element.classList.add(className);
}

/** Toggles body scroll prevention. */
export function toggleScrollPrevention(prevent: boolean) {
	const c = 'prevent-scroll';
	const body = document.getElementsByTagName('body')[0].classList;
	if (prevent) {
		body.add(c);
	} else {
		body.remove(c);
	}
}

/** Converts an article ID to a Date object. */
export function idToDate(articleId: string) {
	const y = articleId.slice(0, 4);
	const m = articleId.slice(4, 6);
	const d = articleId.slice(6, 8);
	return new Date(`${y}-${m}-${d}`);
}

/** Calculates the age of a person from their birthday. */
export function calcAge(birthday: Date) {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate();
	let age = year - birthday.getFullYear();
	const birthMonth = birthday.getMonth() + 1;
	age -= month < birthMonth || (month == birthMonth && date < birthday.getDate()) ? 1 : 0;
	return age;
}

/** Pads a number with zeros. */
export function zeroPad(num: number, len: number) {
	return num.toString().padStart(len, '0');
}
