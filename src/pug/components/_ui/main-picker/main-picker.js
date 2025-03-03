const pickers = document.querySelectorAll(".main-picker");

if (pickers.length) {
	const onClickSetValue = (evt) => {
		evt.preventDefault();
		const target = evt.currentTarget;

		const value = target.querySelector("input").value;

		const headline = target
			.closest(".main-picker")
			.querySelector(".main-picker__headline > span");

		headline.innerText = value;
	};

	pickers.forEach((picker) => {
		const items = picker.querySelectorAll(".main-picker__item");

		items.forEach((item) => {
			item.addEventListener("click", onClickSetValue);
		});
	});
}
