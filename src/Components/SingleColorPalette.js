import React, { Component } from "react";
import { v4 } from "uuid";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		// console.log(this._shades);
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
	render() {
		const colorBoxes = this._shades.map((color) => {
			return (
				<ColorBox
					key={v4()}
					background={color.hex}
					name={color.name}
					showLink={false}
				/>
			);
		});
		return (
			<div className='Palette'>
				<h1>Single Color Palette</h1>
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}
