// © 2022 REVATI

const slider_len = 4;
let slider_index = 0;

function news_prev(btn) {
	let btn_parent = btn.parentElement;

	// Whether the previous item is not exist.
	if (slider_index == 0) {
		btn_parent.children[0].classList.add("inactive");
		shake(btn_parent);
	} else {
		slider_index--;
		apply_news(slider_index, btn_parent);
	}
}

function news_next(btn) {
	let btn_parent = btn.parentElement;

	// Whether the next item is not exist.
	if (slider_index + 1 == slider_len) {
		btn_parent.children[1].classList.add("inactive");
		shake(btn_parent);
	} else {
		slider_index++;
		apply_news(slider_index, btn_parent);
	}
}

function apply_news(index, btn_parent) {
	let news = btn_parent.children[2].children;
	let allow_left = btn_parent.children[0].classList;
	let allow_right = btn_parent.children[1].classList;

	let mid = news[index].classList;
	mid.remove("left-item");
	mid.remove("right-item");
	mid.add("middle-item");

	// Whether the previous item is exist.
	if (slider_index != 0) {
		let left = news[index - 1].classList;
		left.remove("middle-item");
		left.remove("hidden");
		left.add("left-item");
		allow_left.remove("inactive");
	} else {
		allow_left.add("inactive");
	}

	// Whether the next item is exist.
	if (slider_index + 1 != slider_len) {
		let right = news[index + 1].classList;
		right.remove("middle-item");
		right.remove("hidden");
		right.add("right-item");
		allow_right.remove("inactive");
	} else {
		allow_right.add("inactive");
	}

	// Whether the two previous item is exist.
	if (1 < slider_index) {
		let beyond_left = news[index - 2].classList;
		beyond_left.remove("left-item");
		beyond_left.add("hidden");
	}

	// Whether the two next item is exist.
	if (slider_index + 2 < slider_len) {
		let beyond_right = news[index + 2].classList;
		beyond_right.remove("right-item");
		beyond_right.add("hidden");
	}
};
