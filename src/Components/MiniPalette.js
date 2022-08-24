import React from "react";
import { withStyles } from "@material-ui/styles";
import { v4 } from "uuid";

const styles = {
	root: {
		backgroundColor: "#fff",
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		"& :hover": {
			cursor: "pointer",
		},
	},
	colors: {
		backgroundColor: "#dae1e4",
		height: "100px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative",
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem",
	},
	miniColorBoxes: {
		height: "25%",
		width: "20%",
		margin: "-2px auto",
		display: "inline-block",
	},
};

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props;
	const miniColorBoxes = colors.map((color) => (
		<div
			key={v4()}
			className={classes.miniColorBoxes}
			style={{ backgroundColor: color.color }}></div>
	));

	return (
		<div className={classes.root}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
