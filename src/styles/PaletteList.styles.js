import sizes from "./sizes";

export const styles = {
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		overflowY: "scroll",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		gridGap: "2rem",
		[sizes.down("lg")]: {
			width: "65%",
		},
		[sizes.down("md")]: {
			width: "70%",
		},
		[sizes.down("xs")]: {
			width: "50%",
			gridGap: "1.5rem",
		},
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		height: "70%",
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap: "5%",
		[sizes.down("sm")]: {
			gridTemplateColumns: "repeat(2,50%)",
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1,100%)",
		},
	},
};
