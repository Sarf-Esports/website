// © 2022 - 2023 REVATI

/**
 * Adds a class to an element when it is scrolled into view.
 * 
 * @param {HTMLCollectionOf<Element>} elms
 * @param {string} cls
 * 
 * # Example:
 * 
 * ```js
 * window.onscroll = () => {
 *    add_class_at_scroll(document.getElementsByClassName("foo"), "view-anim");
 * };
 * ```
 */
export function add_class_at_scroll(elms, cls) {
    [...elms].forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight) {
            e.classList.add(cls)
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

/**
 * Converts a string to camel case.
 * 
 * @param {string} str String to convert.
 * @returns {string} Converted string.
 */
export function word_to_camel_case(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}