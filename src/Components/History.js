import React from "react";
import { useNavigate } from "react-router-dom";
import AnimationLayout from "./AnimationLayout";
import PaletteList from "./PaletteList";

export default function History(props) {
	const history = useNavigate();

	return (
		<AnimationLayout>
			<PaletteList
				history={history}
				palettes={props.palettes}
				removePalette={props.removePalette}
			/>
		</AnimationLayout>
	);
}
