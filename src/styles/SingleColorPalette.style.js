import sizes from "./sizes";

export const styles = {
	palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	paletteColors: {
		height: "90%",
	},
	paletteFooter: {
		height: "4vh",
		margin: "0",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		fontWeight: "700",
	},
	paletteEmoji: {
		fontSize: "1.5rem",
		marginLeft: "1rem",
		marginRight: "1rem",
	},
	colorBox: {
		width: "20%",
		height: (props) => (props.showingFullColorPalette ? "25%" : "50%"),
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4.5px",
		"&:hover button": {
			opacity: "1",
			transition: ".7s",
		},
	},
	goBack: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4.5px",
		backgroundColor: " #000",

		[sizes.down("lg")]: {
			width: "25%",
			height: "33%",
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "20%",
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: "10%",
		},
	},
	backButton: {
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "calc(50% - 15px)",
		left: "calc(50% - 50px)",
		cursor: "pointer",
		outline: "none",
		textAlign: "center",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		color: "white",
		textTransform: "uppercase",
		border: "none",
		transition: "0.7s",
		textDecoration: "none",
	},
};
