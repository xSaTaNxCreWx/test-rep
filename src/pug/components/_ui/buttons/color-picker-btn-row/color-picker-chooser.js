const pickers = document.querySelectorAll(
	".color-picker-btn-row .color-picker-btn",
);

if (pickers.length) {
	const onClickSetActiveSize = (evt) => {
		const target = evt.currentTarget;

		if (target.classList.contains("active")) return;

		target.parentNode
			.querySelector(".color-picker-btn.active")
			.classList.remove("active");
		target.classList.add("active");
	};

	pickers.forEach((picker) => {
		picker.addEventListener("click", onClickSetActiveSize);
	});
}
