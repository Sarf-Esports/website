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
 * - `/stylesheets/util`
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

/**
 * Toggles body scroll prevention.
 *
 * # Dependencies:
 * - `/stylesheets/util` (body.prevent-scroll)
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
