const body = document.querySelector("body");

const setSiteOffset = () => {
	document.documentElement.style.setProperty(
		"--scrollbar-width",
		window.innerWidth - body.offsetWidth + "px",
	);
};

setSiteOffset();

window.addEventListener("resize", () => {
	setSiteOffset();
});
