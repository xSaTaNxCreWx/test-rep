const removeItem = document.querySelectorAll(".cart-item-remove-btn");

if (removeItem.length) {
	removeItem.forEach((item) => {
		item.addEventListener("click", () => {
			console.log("lick");
			item.closest(".cart-item").remove();
		});
	});
}
