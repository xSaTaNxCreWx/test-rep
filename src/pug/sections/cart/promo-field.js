const opener = document.querySelector(".promo-field-opener");

if (opener) {
	const onClickOpenPromoField = () => {
		console.log("onClickOpenPromoField");
	};

	opener.addEventListener("click", onClickOpenPromoField);
}
