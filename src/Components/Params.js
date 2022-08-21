import React from "react";
import { useParams } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import { colors } from "../seedColors";
import Palette from "./Palette";

export default function Params() {
	let params = useParams();
	const { id } = params;

	function findPalette(id) {
		let palette = colors.find((color) => id === color.id);

		return generatePalette(palette);
	}
	console.log(findPalette(id));

	return <Palette palette={findPalette(id)} />;
}
