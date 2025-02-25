const favBtns = document.querySelectorAll("button.btn-fav");

if (favBtns.length) {
	favBtns.forEach((btn) => {
		btn.addEventListener("click", (evt) => {
			evt.currentTarget.classList.toggle("active");
		});
	});
}
