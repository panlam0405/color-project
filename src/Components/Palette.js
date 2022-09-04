import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { v4 } from "uuid";
import "../styles/Palette.css";
import { Navbar } from "./Navbar";
import PaletteFooter from "./PaletteFooter";
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
};

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: "hex",
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(e) {
		this.setState({ format: e.target.value });
	}
	render() {
		// console.log(this.props.palette);
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		let colorBoxes = colors[level].map((color) => (
			<ColorBox
				key={v4()}
				background={color[format]}
				name={color.name}
				colorId={color.id}
				paletteId={id}
				showingFullColorPalette={true}
			/>
		));
		return (
			<div className={classes.palette}>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showAllColors={true}
				/>
				<div className={classes.paletteColors}>{colorBoxes} </div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
