const togglers = document.querySelectorAll(".top-multilevel-menu-toggler");

if (togglers.length) {
	const menus = document.querySelectorAll(".top-multilevel-menu__main-list");

	togglers.forEach((toggler) => {
		toggler.addEventListener("click", (evt) => {
			if (evt.currentTarget.classList.contains("active")) return;

			document
				.querySelector(".top-multilevel-menu-toggler.active")
				.classList.remove("active");
			evt.currentTarget.classList.add("active");

			const id = evt.currentTarget.dataset.id;

			menus.forEach((menu) => {
				if (menu.dataset.toggler !== id) {
					menu.classList.remove("active");
				} else {
					menu.classList.add("active");
				}
			});
		});
	});
}
