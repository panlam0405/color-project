import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		let paletteLinks = palettes.map((palette) => (
			<MiniPalette key={v4()} {...palette} />
		));
		return <div className='paletteListLinks'>{paletteLinks}</div>;
	}
}

export default PaletteList;
