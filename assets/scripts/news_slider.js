// © 2022 REVATI

let slider_len;
let slider_index = 0;

function build_news_slider() {
	// TODO: Add new news.
	let path = location.href.replace("index.html", "") + "assets/data/news.json";
	fetch(path)
		.then(response => response.json())
		.then(data => {
			build_news_items(document.getElementById("news-slider"), data);
		})
		.catch(_ => {
			// for local environment
			fetch("https://sarf-esports.github.io/website/assets/data/news.json")
				.then(response => response.json())
				.then(data => {
					build_news_items(document.getElementById("news-slider"), data);
				});
		});
}

function build_news_items(elm, news_list) {
	let keys = Object.keys(news_list);
	slider_len = keys.length;
	keys.forEach((id, i) => {
		let img = `<img src="./assets/images/news/${id}.png" alt="news thumbnail" loading="lazy">`;
		let h1 = `<h1>${news_list[id]}</h1>`;
		let a = `<a href="./news/${id}.html">${img}${h1}</a>`;
		let li_cls;
		switch (i) {
			case 0: li_cls = "middle-item"; break;
			case 1: li_cls = "right-item"; break;
			default: li_cls = "hidden";
		}
		let li = `<li class="${li_cls}">${a}</li>`;
		elm.insertAdjacentHTML("beforeend", li);
	});
	if (slider_len == 1) {
		document.getElementById("arrow-right").classList.add("inactive");
	}
}

function news_prev(btn) {
	let btn_parent = btn.parentElement;

	// Whether the previous item is not exist.
	if (slider_index == 0) {
		btn_parent.children[0].classList.add("inactive");
		shake(btn_parent);
	} else {
		slider_index--;
		apply_news(btn_parent);
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
		apply_news(btn_parent);
	}
}

function apply_news(btn_parent) {
	let news = btn_parent.children[2].children;
	let allow_left = btn_parent.children[0].classList;
	let allow_right = btn_parent.children[1].classList;

	let mid = news[slider_index].classList;
	mid.remove("left-item");
	mid.remove("right-item");
	mid.add("middle-item");

	// Whether the previous item is exist.
	if (slider_index != 0) {
		let left = news[slider_index - 1].classList;
		left.remove("middle-item");
		left.remove("hidden");
		left.add("left-item");
		allow_left.remove("inactive");
	} else {
		allow_left.add("inactive");
	}

	// Whether the next item is exist.
	if (slider_index + 1 != slider_len) {
		let right = news[slider_index + 1].classList;
		right.remove("middle-item");
		right.remove("hidden");
		right.add("right-item");
		allow_right.remove("inactive");
	} else {
		allow_right.add("inactive");
	}

	// Whether the two previous item is exist.
	if (1 < slider_index) {
		let beyond_left = news[slider_index - 2].classList;
		beyond_left.remove("left-item");
		beyond_left.add("hidden");
	}

	// Whether the two next item is exist.
	if (slider_index + 2 < slider_len) {
		let beyond_right = news[slider_index + 2].classList;
		beyond_right.remove("right-item");
		beyond_right.add("hidden");
	}
};
