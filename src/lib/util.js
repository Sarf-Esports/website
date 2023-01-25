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
 * - `/stylesheets/util.scss`
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


/**
 * Returns a formatted date string.
 * 
 * @param {string} date
 */
export function fmt_date(date) {
    const y = date.slice(0, 4);
    const m = date.slice(4, 6).replace(/^0+/, '');
    const d = date.slice(6, 8).replace(/^0+/, '');
    return `${y}/${m}/${d}`;
}

/**
 * Toggles body scroll prevention.
 * 
 * @param {boolean} prevent
 * 
 * # Dependencies:
 * - `/stylesheets/util.scss` (body.prevent-scroll)
*/
export function toggle_scroll_prevention(prevent) {
    let c = "prevent-scroll";
    let body = document.getElementsByTagName('body')[0].classList;
    if (prevent) {
        body.add(c);
    } else {
        body.remove(c);
    }
}
