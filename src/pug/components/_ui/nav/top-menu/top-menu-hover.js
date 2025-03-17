const menus = document.querySelectorAll(".top-menu");

if (menus.length) {
	const burger = document.querySelector(".burger");
	menus.forEach((menu) => {
		menu.addEventListener("mouseover", () => {
			burger.classList.contains("active")
				? burger.classList.remove("active")
				: null;
		});
	});
}
