import { makeStyles } from "@material-ui/core/styles";
import sizes from "./sizes";
export const useStyles = makeStyles(() => ({
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4.5px",
		transition: "unset",
		"&:hover svg": {
			color: "#fff",
			scale: "1.2",
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: "20%",
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "10%",
		},
		[sizes.down("sm")]: {
			width: "100%",
			height: "5%",
		},
	},
	boxContent: {
		position: "absolute",
		width: "90%",
		left: "0px",
		bottom: "0px",
		padding: "10px",
		letterSpacing: "1px",
		texttransform: "uppercase",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between",
		color: "rgba(0,0,0,0.5)",
		alignItems: "flex-end",

		[sizes.down("sm")]: {
			"& > span": {
				marginBottom: "-6px !Important",
			},
			"& > svg": {
				marginBottom: "-7px !Important",
			},
		},
	},
	deleteIcon: {
		transition: "all 0.7s ease",
	},
}));
