import Swiper from "swiper";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const slider = document.querySelector(".sort");

if (slider) {
	new Swiper(slider, {
		modules: [FreeMode],
		spaceBetween: 10,
		slidesPerView: "auto",
		freeMode: true,
	});
}

// const slider = document.querySelector(".catalog-detail-slider");

// if (slider) {
// 	let mediaQuery = window.matchMedia("(max-width: 479px)");
// 	let isInited = false;
// 	let swiper = null;

// 	const sliderInit = () => {
// 		return new Swiper(".catalog-detail-slider", {
// 			modules: [Navigation, Pagination],
// 			slidesPerView: 1,
// 			pagination: {
// 				el: ".catalog-detail-slider .swiper-pagination",
// 				clickable: true,
// 			},
// 		});
// 	};

// 	const checkSliderInit = () => {
// 		if (mediaQuery.matches) {
// 			if (!isInited) {
// 				swiper = sliderInit();
// 				isInited = !isInited;
// 			}
// 		} else {
// 			if (isInited) {
// 				swiper.destroy(true, true);
// 				isInited = !isInited;
// 			}
// 		}
// 	};

// 	checkSliderInit();

// 	window.addEventListener("resize", () => {
// 		checkSliderInit();
// 	});
// }
