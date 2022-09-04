import React, { Component } from "react";
import { v4 } from "uuid";
import ColorBox from "./ColorBox";
import { Navbar } from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
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

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		// console.log(this._shades);
		this.state = {
			format: "hex",
		};
		this.changeFormat = this.changeFormat.bind(this);
	}

	gatherShades(palette, colorId) {
		let { colors } = palette;
		let shades = [];
		for (let color in colors)
			shades = shades.concat(
				colors[color].filter((shade) => shade.id === colorId)
			);

		return shades.slice(1);
	}

	changeFormat(e) {
		this.setState({ format: e.target.value });
	}
	render() {
		let { format } = this.state;
		const { classes } = this.props;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => {
			return (
				<ColorBox
					key={v4()}
					background={color[format]}
					name={color.name}
					showingFullColorPalette={false}
				/>
			);
		});

		return (
			<div className={`SingleColorPalette ${classes.palette}`}>
				<Navbar handleChange={this.changeFormat} showAllColors={false} />
				<div className={classes.paletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`} className={classes.backButton}>
							Go back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
