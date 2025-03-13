// const side = document.querySelector(".catalog-detail__grid-item--main");
// const gallery = document.querySelector(".catalog-detail__grid-item--gallery");

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
