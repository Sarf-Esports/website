// © 2022 REVATI

/**
 * Fade in from left.
 * 
 * # Required:
 * - `assets/stylesheets/util.css`
 */
function fade_in_at_scroll(elms) {
    window.onscroll = () => {
        [...elms].forEach((e) => {
            if (e.getBoundingClientRect().top < window.innerHeight) {
                e.firstElementChild.classList.add("fade-in-right")
            }
        });
    };
}

/**
 * Element shaker.
 * 
 * # Required:
 * - `assets/stylesheets/util.css`
 */
function shake(elm) {
	elm.classList.add("shake");
	setTimeout(function () {
		elm.classList.remove("shake");
	}, 1000);
}