import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		let paletteLinks = palettes.map((palette) => (
			<div>
				<Link exact to={`palette/${palette.id}`}>
					{palette.paletteName}
				</Link>
			</div>
		));
		return <div classname='paletteListLinks'>{paletteLinks}</div>;
	}
}

export default PaletteList;
