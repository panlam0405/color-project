export const styles = {
	root: {
		backgroundColor: "#fff",
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		cursor: "pointer",
		height: "fit-content",

		"&:hover > :first-child ": {
			opacity: "1",
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
		height: "27%",
		width: "20%",
		margin: "-3px auto",
		display: "inline-block",
	},
	delete_icon: {
		color: "white",
		backgroundColor: "#eb3d30",
		height: "25px",
		width: "25px",
		position: "absolute",
		top: "0",
		right: "0",
		padding: "10px",
		zIndex: "5",
		opacity: "0",
	},
};
