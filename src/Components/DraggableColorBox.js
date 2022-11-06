import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useStyles } from "../styles/DraggableColorBox.styles";
import { SortableElement } from "react-sortable-hoc";
import chroma from "chroma-js";

const DraggableColorBox = SortableElement((props) => {
	const { colors, name } = props;
	const classes = useStyles();

	const nameColor =
		chroma(colors).luminance() >= 0.17
			? "rgba(0,0,0,0.8)"
			: "rgba(255,255,255,0.8)";

	return (
		<div className={classes.root} style={{ backgroundColor: colors }}>
			<div className={classes.boxContent}>
				<span
					style={{
						color: nameColor,
					}}>
					{name}
				</span>
				<DeleteOutlinedIcon
					className={classes.deleteIcon}
					onClick={() => props.delete(name)}
				/>
			</div>
		</div>
	);
});

export default DraggableColorBox;
