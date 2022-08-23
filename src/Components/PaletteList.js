import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
	root: {
		backgroundColor: "blue",
		height: "100%",
		display: "flex",
		justifyContent: "center",
	},
	container: {
		width: "50%",
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
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap: "5%",
	},
};

class PaletteList extends Component {
	render() {
		const { palettes, classes } = this.props;
		let paletteLinks = palettes.map((palette) => (
			<MiniPalette key={v4()} {...palette} />
		));
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
					</nav>
					<div className={classes.palettes}>{paletteLinks}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
