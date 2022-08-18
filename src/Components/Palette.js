import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { v4 } from "uuid";
import "../styles/Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
		};
		this.changeLevel = this.changeLevel.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		let colorBoxes = colors[level].map((color) => (
			<ColorBox key={v4()} background={color.hex} name={color.name} />
		));

		return (
			<div className='Palette'>
				{/* Navbar */}
				<Slider
					defaultValue={level}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeLevel}
				/>
				<div className='Palette-colors'>{colorBoxes} </div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
