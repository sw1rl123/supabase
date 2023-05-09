let theme = 0;
let body = document.getElementsByTagName("body")[0];
let switcher = document.getElementById("switcher");

function Theme() {
	if (theme === 0) {
		body.classList.add("theme--light");
		switcher.classList.remove("theme__switcher--dark");
		theme = 1;
	}
	else {
		body.classList.remove("theme--light");
		switcher.classList.add("theme__switcher--dark");
		theme = 0;
	}
}

function burger(n) {
	let menu = document.getElementsByClassName("burger-menu")[n-1];

	if (menu.classList.contains("burger-menu--close")) {
		menu.classList.remove("burger-menu--close");
	}
	else {
		menu.classList.add("burger-menu--close");
	}
}