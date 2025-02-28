import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slider = document.querySelector(".catalog-detail-slider");

if (slider) {
	const pagination = slider.querySelector(".swiper-pagination");
	console.log(pagination);

	// let mql = window.matchMedia("(max-width: 534px)");

	// let swiper = null;

	// window.addEventListener("resize", () => {
	// 	if (mql.matches) {
	// 		swiper = new Swiper(".catalog-detail-slider", {
	// 			modules: [Navigation, Pagination],
	// 			slidesPerView: 1,
	// 			pagination: {
	// 				el: ".catalog-detail-slider .swiper-pagination",
	// 			},
	// 		});
	// 	} else {
	// 		if (swiper) {
	// 			swiper.destroy(true, true);
	// 		}
	// 	}
	// });

	// window.addEventListener("resize", () => {
	// 	if (mql.matches) {
	// 		swiper = new Swiper(slider, {
	// 			modules: [Navigation, Pagination],
	// 			slidesPerView: 1,
	// 			pagination: {
	// 				el: pagination ? pagination : null,
	// 				clickable: true,
	// 			},
	// 		});
	// 	} else {
	// 		console.log(swiper);
	// 		swiper.destroy(true, true);
	// 		console.log(swiper);
	// 	}
	// });
}
