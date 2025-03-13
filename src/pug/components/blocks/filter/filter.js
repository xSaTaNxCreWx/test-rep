const opener = document.querySelector(".filter-opener-btn");

if (opener) {
	const filter = document.querySelector(".filter-wrapper");
	const closer = document.querySelector(".filter-closer");

	const setActiveClass = (node, state) => {
		!!state ? node.classList.add("active") : node.classList.remove("active");
	};

	opener.addEventListener("click", () => {
		setActiveClass(opener, true);
		setActiveClass(filter, true);
	});

	closer.addEventListener("click", () => {
		setActiveClass(opener);
		setActiveClass(filter);
	});
}
