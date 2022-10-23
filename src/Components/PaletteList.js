import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { styles } from "../styles/PaletteList.styles";

class PaletteList extends Component {
	gotoPalette(id) {
		this.props.history(`/palette/${id}`);
	}
	render() {
		const { palettes, classes } = this.props;
		let paletteLinks = palettes.map((palette) => (
			<MiniPalette
				key={v4()}
				{...palette}
				handleClick={() => this.gotoPalette(palette.id)}
				id={palette.id}
				removePalette={this.props.removePalette}
			/>
		));
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to='/palette/new'>Create a new Palette</Link>
					</nav>
					<div className={classes.palettes}>{paletteLinks}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
