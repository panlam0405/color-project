export const styles = {
	Navbar: {
		width: "98%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "6vh",
	},

	logo: {
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		backgroundColor: "#eceff1",
		fontFamily:
			'Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
	},

	sliderLevel: {
		margin: "0 10px",
		width: "-webkit-fill-available",
		display: "flex",
		flexDirection: "row",
		"& span": {
			display: "block",
			whiteSpace: "pre",
			marginRight: "15px",
		},
	},

	colorSlider: {
		width: "340px",
		margin: "0",
		display: "inline-block",
		flexWrap: "nowrap",
	},

	slider: {
		width: "-webkit-fill-available",
		"& .rc-slider-track": {
			backgroundColor: "transparent",
		},
		"& .rc-slider-rail": {
			height: "8px",
		},

		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, rc-slider-handle:hover":
			{
				backgroundColor: "green",
				outline: "transparent",
				outlineColor: "transparent",
				border: "2px solid green",
				boxShadow: "none",
				width: "13px",
				height: "13px",
				marginLeft: "-7px",
				marginTop: "-3px",
			},
	},
	selectContainer: {
		marginLeft: "auto",
	},
};
