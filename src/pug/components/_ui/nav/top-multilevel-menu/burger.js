const burger = document.querySelector(".burger");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");

	if (burger.classList.contains("active")) {
		body.classList.add("body-locked");
	} else {
		body.classList.remove("body-locked");
	}
});
