import { limitStr } from "../utils/limitStr";

const blocks = document.querySelectorAll(".text-collapsed-block");

if (blocks.length) {
	blocks.forEach((block) => {
		const content = block.querySelector(".text-collapsed-block-content");

		if (content.innerHTML.length <= 200) return;

		const copyText = content.innerHTML;
		content.innerHTML = limitStr(content.innerHTML, 200);

		const btn = document.createElement("button");
		btn.classList.add(
			"btn",
			"btn-thin",
			"underlined",
			"text-collapsed-block-expander",
		);
		btn.innerHTML = "Еще";
		block.appendChild(btn);

		btn.addEventListener("click", () => {
			content.innerHTML = copyText;
			btn.remove();
		});
	});
}
