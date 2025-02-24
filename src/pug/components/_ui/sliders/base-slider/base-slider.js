import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sliders = document.querySelectorAll(".base-slider");

if (sliders.length) {
	sliders.forEach((slider) => {
		const pagination = document.querySelector(
			".base-slider + .swiper-wrapper + .swiper-pagination",
		);
		const btnNext = slider.querySelector(".swiper-button-next");
		const btnPrev = slider.querySelector(".swiper-button-prev");

		const isProductCardSlider = slider.classList.contains(
			"product-card-slider",
		);

		new Swiper(slider, {
			modules: [Navigation, Pagination],
			slidesPerView: isProductCardSlider ? 1 : 2,

			navigation: {
				nextEl: btnNext ? btnNext : null,
				prevEl: btnPrev ? btnPrev : null,
			},

			pagination: {
				el: pagination ? pagination : null,
				clickable: true,
			},

			breakpoints: isProductCardSlider
				? {
						375: {
							slidesPerView: 2,
						},

						768: {
							slidesPerView: 3,
						},

						1024: {
							slidesPerView: 4,
						},
				  }
				: null,
		});
	});
}
