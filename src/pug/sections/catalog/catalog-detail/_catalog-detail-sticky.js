const side = document.querySelector(".catalog-detail__grid-item--main");
const gallery = document.querySelector(".catalog-detail__grid-item--gallery");

if (side && gallery) {
	const setSticky = (el, pos) => {
		side.style.position = "sticky";
		side.style.top = pos + "px";
	};

	setSticky(side, 60);

	const resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			if (entry.contentBoxSize) {
				if (window.innerHeight < side.getBoundingClientRect().height) {
					console.log("окно больше чем сайд");
					setSticky(
						side,
						-1 * (side.getBoundingClientRect().height - window.innerHeight),
					);
				} else {
					setSticky(side, 60);
				}
			}
		}
	});

	resizeObserver.observe(side);

	window.addEventListener("resize", () => {
		if (window.innerHeight < side.getBoundingClientRect().height) {
			console.log("окно больше чем сайд");
			setSticky(
				side,
				-1 * (side.getBoundingClientRect().height - window.innerHeight),
			);
		} else {
			setSticky(side, 60);
		}
	});
}

// if (side && gallery) {
// 	// Создание нового объекта IntersectionObserver
// 	// let observer = new IntersectionObserver(function (entry, observer) {
// 	// 	console.log("элемент", entry[0].target);
// 	// 	console.log("пересекается", entry[0].isIntersecting);
// 	// });

// 	// observer.observe(side);

// 	let currentPos = null;

// 	const setSticky = (el, pos) => {
// 		side.style.position = "sticky";
// 		side.style.top = pos + "px";

// 		currentPos = pos;
// 	};

// 	if (window.innerHeight > side.getBoundingClientRect().height) {
// 		console.log("окно больше чем сайд");
// 		setSticky(side, 60);
// 	}

// 	const resizeObserver = new ResizeObserver((entries) => {
// 		for (const entry of entries) {
// 			if (entry.contentBoxSize) {
// 				// console.log(
// 				// 	"sideH",
// 				// 	side.getBoundingClientRect().height,
// 				// 	"galleryH",
// 				// 	gallery.getBoundingClientRect().height,
// 				// 	"sideY",
// 				// 	side.getBoundingClientRect().y,
// 				// 	"galleryY",
// 				// 	gallery.getBoundingClientRect().y,
// 				// 	"Высота окна:",
// 				// 	window.innerHeight,
// 				// 	"Пpокрутка страницы:",
// 				// 	window.scrollY,
// 				// );

// 				console.log(
// 					"test",
// 					window.innerHeight,
// 					side.getBoundingClientRect().height,
// 					window.innerHeight < side.getBoundingClientRect().height,
// 				);
// 				if (window.innerHeight < side.getBoundingClientRect().height) {
// 					console.log("окно больше чем сайд");
// 					setSticky(
// 						side,
// 						-1 * (side.getBoundingClientRect().height - window.innerHeight),
// 					);
// 				} else {
// 					setSticky(side, 60);
// 				}
// 			}
// 		}
// 	});

// 	resizeObserver.observe(side);

// 	let curScroll = 0;
// 	let isActive = false;
// 	let initialUpPos = null;

// 	function getScrollDirection() {
// 		if (window.scrollY > curScroll) {
// 			console.log("down");
// 			isActive != isActive;

// 			if (initialUpPos - window.scrollY < 60) {
// 				setSticky(side, initialUpPos - window.scrollY);
// 			}
// 		} else {
// 			console.log("up", window.scrollY, currentPos);
// 			if (!isActive) {
// 				isActive = true;
// 				initialUpPos = window.scrollY;
// 			}
// 			if (initialUpPos - window.scrollY < 60) {
// 				setSticky(side, initialUpPos - window.scrollY);
// 			}
// 		}
// 		curScroll = window.scrollY;
// 	}

// 	window.addEventListener("scroll", (evt) => {
// 		getScrollDirection();
// 	});
// }

// if (side && gallery) {
// 	const wrap = document.querySelector(".catalog-detail__grid");

// 	const setSticky = (sideH, winH) => {
// 		const raznica = winH - sideH - 30;
// 		side.style.position = "sticky";
// 		side.style.top = `${raznica}px`;
// 	};

// 	const resizeObserver = new ResizeObserver((entries) => {
// 		for (const entry of entries) {
// 			if (entry.contentBoxSize) {
// 				const sideHeight = entry.contentBoxSize[0].blockSize;
// 				// console.log(
// 				// 	"Высота сайдбара:",
// 				// 	sideHeight,
// 				// 	"Высота галереи:",
// 				// 	gallery.getBoundingClientRect().height,
// 				// 	"Высота окна:",
// 				// 	window.innerHeight,
// 				// );
// 				if (side.getBoundingClientRect().height > window.innerHeight) {
// 					setSticky(side.getBoundingClientRect().height, window.innerHeight);
// 				}
// 			}
// 		}
// 	});

// 	resizeObserver.observe(side);

// 	// window.addEventListener("resize", () => {
// 	// 	console.log(
// 	// 		"Высота сайдбара:",
// 	// 		side.getBoundingClientRect().height,
// 	// 		"Высота галереи:",
// 	// 		gallery.getBoundingClientRect().height,
// 	// 		"Высота окна:",
// 	// 		window.innerHeight,
// 	// 	);

// 	// 	if (
// 	// 		side.getBoundingClientRect().height <
// 	// 		gallery.getBoundingClientRect().height
// 	// 	) {
// 	// 		setSticky(side.getBoundingClientRect().height, window.innerHeight);
// 	// 	}
// 	// });

// 	window.addEventListener("scroll", () => {
// 		if (side.getBoundingClientRect().height > window.innerHeight) {
// 			setSticky(side.getBoundingClientRect().height, window.innerHeight);
// 		}
// 	});
// }
