import { makeStyles } from "@material-ui/core/styles";

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
	},
	deleteIcon: {
		transition: "all 0.7s ease",
	},
}));
