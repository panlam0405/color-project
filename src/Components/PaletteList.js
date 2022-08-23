import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		let paletteLinks = palettes.map((palette) => (
			<div key={v4()}>
				<Link to={`palette/${palette.id}`}>{palette.paletteName}</Link>
			</div>
		));
		return <div className='paletteListLinks'>{paletteLinks}</div>;
	}
}

export default PaletteList;
