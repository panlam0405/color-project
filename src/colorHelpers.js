import chroma, { scale } from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(palette) {
	let newPalette = {
		paletteName: palette.paletteName,
		id: palette.id,
		emoji: palette.emoji,
		colors: {},
	};
	for (let level of levels) newPalette.colors[level] = [];

	for (let color of palette.colors) {
		let scaleColor = scaledPalettesCreation(color.color, 10).reverse();

		for (let i in scaleColor) {
			newPalette.colors[levels[i]].push({
				name: `${color.name} ${levels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, "-"),
				hex: scale(i),
				rgb: chroma(scaleColor[i]).css(),
				rgba: chroma(scaleColor[i])
					.css()
					.replace("rgb", "rgba")
					.replace(")", ",1.0)"),
			});
		}
	}

	return newPalette;
}

function createColorScaleArray(hexColor) {
	const end = "#fff";
	return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function scaledPalettesCreation(hexColor, numOfColors) {
	return chroma
		.scale(createColorScaleArray(hexColor))
		.mode("lab")
		.colors(numOfColors);
}

export { generatePalette };
