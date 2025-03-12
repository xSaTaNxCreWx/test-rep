const counters = document.querySelectorAll(".counter");

if (counters) {
	const onClickSetCounterValue = (evt) => {
		const target = evt.currentTarget;
		const control = target.parentNode.querySelector("input");

		if (target.classList.contains("counter-btn--inc")) {
			control.value++;

			if (Number(control.value) > 1) {
				target.parentNode
					.querySelector(".counter-btn--dec")
					.classList.remove("disabled");
			}
		}

		if (
			target.classList.contains("counter-btn--dec") &&
			Number(control.value) !== 1
		) {
			control.value--;

			if (Number(control.value) === 1) {
				target.classList.add("disabled");
			}
		}
	};

	counters.forEach((counter) => {
		const btns = counter.querySelectorAll(".counter-btn");

		btns.forEach((btn) => {
			btn.addEventListener("click", onClickSetCounterValue);
		});
	});
}
