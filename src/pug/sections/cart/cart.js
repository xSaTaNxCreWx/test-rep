// const items = document.querySelectorAll(".cart-item");
// const selectAllBtn = document.querySelector(".cart-select-all-btn");
// const removedNode = document.querySelector(".cart-removed-items span");

// if (items) {
// 	let checked = 0;

// 	const fillSelectBtn = (status) => {
// 		if (!!status) {
// 			!selectAllBtn.classList.contains("hidden")
// 				? selectAllBtn.classList.add("hidden")
// 				: null;
// 		} else {
// 			selectAllBtn.classList.contains("hidden")
// 				? selectAllBtn.classList.remove("hidden")
// 				: null;
// 		}

// 		removedNode.innerHTML = checked;
// 	};

// 	const onControlClickHandler = () => {
// 		checked = 0;

// 		items.forEach((item) => {
// 			const control = item.querySelector('input[type="checkbox"]');
// 			if (control.checked) checked++;
// 		});

// 		if (checked === items.length) {
// 			fillSelectBtn(true);
// 		} else {
// 			fillSelectBtn(false);
// 		}
// 	};

// 	items.forEach((item) => {
// 		const control = item.querySelector('input[type="checkbox"]');
// 		if (control.checked) checked++;

// 		control.addEventListener("click", onControlClickHandler);
// 	});

// 	if (checked === items.length) {
// 		fillSelectBtn(true);
// 	}

// 	console.log(checked, items.length);
// }
