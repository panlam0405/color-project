export const styles = {
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		overflowY: "scroll",
	},
	container: {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
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
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap: "5%",
	},
};
