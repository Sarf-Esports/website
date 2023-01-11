// © 2022 REVATI

/**
 * Fade in from left.
 * 
 * @param {HTMLCollectionOf<Element>} elms
 * 
 * # Example:
 * 
 * ```js
 * window.onscroll = () => {
 *    fade_in_at_scroll(document.getElementsByClassName("foo"));
 * };
 * ```
 * 
 * # Dependencies:
 * - `/stylesheets/util.css`
 */
export function fade_in_at_scroll(elms) {
    [...elms].forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight) {
            e.classList.add("fade-in-right")
        }
    });
}

/**
 * Element shaker.
 * 
 * @param {HTMLElement} elm
 * 
 * # Dependencies:
 * - `/stylesheets/util.css`
 */
export function shake(elm) {
	elm.classList.add("shake");
	setTimeout(function () {
		elm.classList.remove("shake");
	}, 1000);
}