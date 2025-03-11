const opener = document.querySelector(".filter-opener-btn");

if (opener) {
	const filter = document.querySelector(".filter-wrapper");
	const closer = document.querySelector(".filter");

	opener.addEventListener("click", () => {
		filter.classList.add("active");
	});

	closer.addEventListener("click", () => {
		filter.classList.remove("active");
	});
}
