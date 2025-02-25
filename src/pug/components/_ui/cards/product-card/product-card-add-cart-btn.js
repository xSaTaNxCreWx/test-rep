const btns = document.querySelectorAll(".product-card .btn-cart-wide");

if (btns.length) {
	const onClickShowSizeBlock = (evt) => {
		const target = evt.currentTarget;
		const props = target.parentNode.querySelector(".product-cart__props-row");

		!props.classList.contains("active") ? props.classList.add("active") : null;
	};

	btns.forEach((btn) => {
		btn.addEventListener("click", onClickShowSizeBlock);
	});
}
