import React from "react";
import { useNavigate } from "react-router-dom";
import PaletteList from "./PaletteList";

export default function History(props) {
	const history = useNavigate();

	return (
		<PaletteList
			history={history}
			palettes={props.palettes}
			removePalette={props.removePalette}
		/>
	);
}
