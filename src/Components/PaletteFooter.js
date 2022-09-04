import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "../styles/Footer.styles";

function PaletteFooter(props) {
	let { classes } = props;
	return (
		<footer className={classes.paletteFooter}>
			{props.paletteName}
			<span className={classes.paletteEmoji}>{props.emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(PaletteFooter);
