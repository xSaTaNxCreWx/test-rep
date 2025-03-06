const inputs = document.querySelectorAll(".main-input-wrapper input");

if (inputs.length) {
	inputs.forEach((input) => {
		input.addEventListener("change", () => {
			console.log("change", input.value, input.value.length);
			if (input.value.length > 0) {
				!input.parentNode.classList.contains("filled")
					? input.parentNode.classList.add("filled")
					: null;
			} else {
				input.parentNode.classList.contains("filled")
					? input.parentNode.classList.remove("filled")
					: null;
			}
		});
	});
}
