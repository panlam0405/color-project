import React from "react";
import { withStyles } from "@material-ui/styles";
import { v4 } from "uuid";
import { styles } from "../styles/MiniPalette.styles";

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props;
	const miniColorBoxes = colors.map((color) => (
		<div
			key={v4()}
			className={classes.miniColorBoxes}
			style={{ backgroundColor: color.color }}></div>
	));

	return (
		<div className={classes.root} onClick={props.handleClick}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
