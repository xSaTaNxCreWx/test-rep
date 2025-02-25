const btns = document.querySelectorAll(".product-card .size-chooser-btn");

if (btns.length) {
	const onClickSetActiveSize = (evt) => {
		const target = evt.currentTarget;

		if (target.classList.contains("active")) return;

		target.parentNode
			.querySelector(".size-chooser-btn.active")
			.classList.remove("active");
		target.classList.add("active");
	};
	btns.forEach((btn) => {
		btn.addEventListener("click", onClickSetActiveSize);
	});
}
