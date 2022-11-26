// © 2022 REVATI

// Fade in from left.
//
// # Required:
// - `assets/stylesheets/util.css`
function fade_in_at_scroll(elm) {
    window.onscroll = () => {
        for (let i = 0; i < elm.length; i++) {
            if (elm[i].getBoundingClientRect().top < window.innerHeight) {
                elm[i].firstElementChild.classList.add("fade-in-right")
            }
        }
    };
}

// Element shaker.
// 
// # Required:
// - `assets/stylesheets/util.css`
function shake(elm) {
	elm.classList.add("shake");
	setTimeout(function () {
		elm.classList.remove("shake");
	}, 1000);
}