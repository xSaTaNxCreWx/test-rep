const items = document.querySelectorAll(".top-multilevel-menu__main-list a");

if (items.length) {
	items.forEach((item) => {
		item.addEventListener("click", (evt) => {
			const innerList = evt.currentTarget.parentNode.querySelector("ul");

			if (!innerList) return;
			evt.preventDefault();
			innerList.classList.toggle("expanded");
		});
	});
}
