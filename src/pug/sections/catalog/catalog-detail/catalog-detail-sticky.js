const side = document.querySelector(".catalog-detail__grid-item--main");
const gallery = document.querySelector(".catalog-detail__grid-item--gallery");
const label = document.querySelector(".js-sticky-label");

if (side && gallery) {
	const initialPos = 90;
	let currentPos = initialPos;

	const setSticky = (el, pos) => {
		side.style.position = "sticky";
		side.style.top = pos + "px";
	};

	setSticky(side, initialPos);
	console.log("sticky");

	const resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			if (entry.contentBoxSize) {
				if (window.innerHeight - 115 < side.getBoundingClientRect().height) {
					currentPos =
						-1 *
						(side.getBoundingClientRect().height - window.innerHeight + 30);
					setSticky(side, currentPos);
				} else {
					setSticky(side, initialPos);
				}
			}
		}
	});

	resizeObserver.observe(side);

	// let curScroll = 0;
	// let startScrollUpPos = null;
	// let isActive = false;

	// function getScrollDirection() {
	// 	if (window.scrollY > curScroll) {
	// 		console.log("down");
	// 		isActive = false;
	// 	} else {
	// 		console.log("up");
	// 		curScroll = window.scrollY;
	// 		setSticky(side, currentPos - 1);
	// 		currentPos += 1;
	// 		if (!isActive) {
	// 			isActive = true;
	// 			startScrollUpPos = window.scrollY;
	// 		}
	// 		console.log(startScrollUpPos, window.scrollY);
	// 	}
	// 	curScroll = window.scrollY;
	// }

	// window.addEventListener("scroll", (evt) => {
	// 	getScrollDirection();
	// });
}
