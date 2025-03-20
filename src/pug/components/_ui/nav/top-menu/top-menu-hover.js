const menus = document.querySelectorAll(".top-menu");
const body = document.querySelector("body");

if (menus.length) {
	const burger = document.querySelector(".burger");
	menus.forEach((menu) => {
		menu.addEventListener("mouseover", () => {
			burger.classList.contains("active")
				? burger.classList.remove("active")
				: null;
			body.classList.contains("body-locked")
				? body.classList.remove("body-locked")
				: null;
		});
	});
}
