import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { v4 } from "uuid";
import { styles } from "../styles/Palette.styles";
import { Navbar } from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

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
