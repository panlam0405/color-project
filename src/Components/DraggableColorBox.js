import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useStyles } from "../styles/DraggableColorBox.styles";

function DraggableColorBox(props) {
	const { color, name } = props;
	const classes = useStyles();

	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteOutlinedIcon
					className={classes.deleteIcon}
					onClick={() => props.delete(name)}
				/>
			</div>
		</div>
	);
}

export default DraggableColorBox;
