// import { Plugin } from "vite";
import fs from "node:fs";
import { readFileSync, readdirSync } from "fs";

let idPerfix = "";
const svgTitle = /<svg([^>+].*?)>/;
const clearHeightWidth = /(width|height)="([^>+].*?)"/g;

const hasViewBox = /(viewBox="[^>+].*?")/g;

const clearReturn = /(\r)|(\n)/g;

function findSvgFile(dir) {
	const svgRes = [];
	const dirents = readdirSync(dir, {
		withFileTypes: true,
	});
	for (const dirent of dirents) {
		if (dirent.isDirectory()) {
			svgRes.push(...findSvgFile(dir + dirent.name + "/"));
		} else {
			const svg = readFileSync(dir + dirent.name)
				.toString()
				.replace(clearReturn, "")
				.replace(svgTitle, ($1, $2) => {
					// console.log(++i)
					// console.log(dirent.name)
					let width = 0;
					let height = 0;
					let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
						if (s2 === "width") {
							width = s3;
						} else if (s2 === "height") {
							height = s3;
						}
						return "";
					});
					if (!hasViewBox.test($2)) {
						content += `viewBox="0 0 ${width} ${height}"`;
					}
					return `<symbol id="${dirent.name.replace(".svg", "")}" ${content}>`;
				})
				.replace(
					"</svg>",
					`<use xlink:href="#${dirent.name.replace(".svg", "")}"/></symbol>`,
				);
			svgRes.push(svg);
		}
	}
	return svgRes;
}

const fileName = "./dist/assets/sprite.svg";

function fileHandler(data) {
	fs.open(fileName, "w", (err) => {
		if (err) throw err;
		console.log("Sprite.svg created");
	});

	fs.writeFile(fileName, data, (err) => {
		if (err) throw err;
		console.log("Data has been replaced!");
	});
}

export const svgBuilder = (path, perfix) => {
	if (path === "") return;
	idPerfix = perfix;
	const res = findSvgFile(path);

	fileHandler(
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${res.join("")}
    </svg>`,
	);
};
