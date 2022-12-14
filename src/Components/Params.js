import React from "react";
import { useParams } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import AnimationLayout from "./AnimationLayout";
// import { colors } from "../seedColors";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";

export default function Params(props) {
	let params = useParams();
	const { id, paletteId, colorId } = params;
	let colors = props.colors;

	function findPalette(id) {
		let palette = colors.find((color) => id === color.id);

		return generatePalette(palette);
	}
	console.log(id);

	return id !== undefined ? (
		<AnimationLayout>
			<Palette palette={findPalette(id)} />
		</AnimationLayout>
	) : (
		<AnimationLayout>
			<SingleColorPalette
				palette={findPalette(paletteId)}
				paletteId={paletteId}
				colorId={colorId}
			/>
		</AnimationLayout>
	);
}
