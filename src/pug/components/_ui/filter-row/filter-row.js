import Swiper from "swiper";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const slider = document.querySelector(".filter-row");

if (slider) {
	new Swiper(slider, {
		modules: [FreeMode],
		spaceBetween: 5,
		slidesPerView: "auto",
		freeMode: true,
	});
}
