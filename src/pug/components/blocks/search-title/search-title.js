const opener = document.querySelector(".search-title-opener");

if (opener) {
	console.log(opener);
	const closer = document.querySelector(".search-title-closer");
	const body = document.querySelector("body");

	const onClickCloseSearchTitle = () => {
		opener.classList.remove("active");
		body.classList.remove("body-locked");

		closer.removeEventListener("click", onClickCloseSearchTitle);
		opener.addEventListener("click", onClickOpenSearchTitle);
	};

	const onClickOpenSearchTitle = () => {
		opener.classList.add("active");
		body.classList.add("body-locked");
		opener.removeEventListener("click", onClickOpenSearchTitle);

		closer.addEventListener("click", onClickCloseSearchTitle);
	};

	opener.addEventListener("click", onClickOpenSearchTitle);
}
