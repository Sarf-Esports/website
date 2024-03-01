// © 2022 REVATI

/**
 * Adds a class to an element when it is scrolled into view.
 *
 * # Example:
 *
 * ```js
 * window.onscroll = () => {
 *    add_class_at_scroll(document.getElementsByClassName("foo"), "view-anim");
 * };
 * ```
 */
export function addClassAtScroll(elms: HTMLCollectionOf<Element>, cls: string) {
	[...elms].forEach((e) => {
		if (e.getBoundingClientRect().top < window.innerHeight) {
			e.classList.add(cls);
		}
	});
}

/**
 * Element shaker.
 *
 * # Dependencies:
 * - `/stylesheets/util`
 */
export function shake(elm: HTMLElement) {
	elm.classList.add('shake');
	setTimeout(function () {
		elm.classList.remove('shake');
	}, 1000);
}

/**
 * Toggles body scroll prevention.
 *
 * # Dependencies:
 * - `/stylesheets/util` (body.prevent-scroll)
 */
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
