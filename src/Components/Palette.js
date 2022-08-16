import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { v4 } from "uuid";
import "../styles/Palette.css";
class Palette extends Component {
	render() {
		// console.log(this.props.colors.colors);
		let colorBoxes = this.props.colors.colors.map((color) => (
			<ColorBox key={v4()} background={color} />
		));

		return (
			<div className='Palette'>
				{/* Navbar */}
				<div className='Palette-colors'>{colorBoxes} </div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
