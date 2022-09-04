import React, { Component } from "react";
import { v4 } from "uuid";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { styles } from "../styles/SingleColorPalette.style";

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
