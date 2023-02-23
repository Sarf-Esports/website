// © 2022 - 2023 REVATI

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
export function add_class_at_scroll(elms: HTMLCollectionOf<Element>, cls: string) {
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
 * - `/stylesheets/util.scss`
 */
export function shake(elm: HTMLElement) {
	elm.classList.add('shake');
	setTimeout(function () {
		elm.classList.remove('shake');
	}, 1000);
}

/** Converts a string to camel case. */
export function word_to_camel_case(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Returns a formatted date string. */
export function fmt_date(date: string) {
	const y = date.slice(0, 4);
	const m = date.slice(4, 6).replace(/^0+/, '');
	const d = date.slice(6, 8).replace(/^0+/, '');
	return `${y}/${m}/${d}`;
}

/**
 * Toggles body scroll prevention.
 *
 * # Dependencies:
 * - `/stylesheets/util.scss` (body.prevent-scroll)
 */
export function toggle_scroll_prevention(prevent: boolean) {
	const c = 'prevent-scroll';
	const body = document.getElementsByTagName('body')[0].classList;
	if (prevent) {
		body.add(c);
	} else {
		body.remove(c);
	}
}
