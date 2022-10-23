import React from "react";
import { withStyles } from "@material-ui/styles";
import { v4 } from "uuid";
import { styles } from "../styles/MiniPalette.styles";
import { DeleteOutlineTwoTone } from "@mui/icons-material";

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props;
	const miniColorBoxes = colors.map((color) => (
		<div
			key={v4()}
			className={classes.miniColorBoxes}
			style={{ backgroundColor: color.color }}></div>
	));

	const deletePalette = (e) => {
		e.stopPropagation();
		props.removePalette(props.id);
	};
	return (
		<div className={classes.root} onClick={props.handleClick}>
			<DeleteOutlineTwoTone
				className={classes.delete_icon}
				style={{ transition: "all .3s ease-in-out" }}
				onClick={(e) => deletePalette(e)}
			/>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
