// © 2022 REVATI

/**
 * Adds a class to an element when it is scrolled into view.
 *
 * # Example:
 *
 * ```js
 * window.onscroll = () => {
 *    addClassAtScroll(document.getElementsByClassName("foo"), "view-anim");
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

/** Calculates the age of a person from their birthday. */
export function calcAge(birthday: Date) {
	const today = new Date();
	console.log(today);
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
