const cards = document.querySelectorAll(".product-card");
const modal = document.querySelector(".size-modal .modal-content");

if (cards.length) {
	cards.forEach((card) => {
		const opener = card.querySelector(".size-modal-opener");

		if (opener) {
			opener.addEventListener("click", () => {
				const template = card.querySelector(".size-modal-content");
				const copy = template.content.cloneNode(true);
				modal.innerHTML = "";
				modal.appendChild(copy);
			});
		}
	});
}
