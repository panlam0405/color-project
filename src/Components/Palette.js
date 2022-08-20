import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { v4 } from "uuid";
import "../styles/Palette.css";
import { Navbar } from "./Navbar";
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
		const { colors } = this.props.palette;
		const { level, format } = this.state;
		let colorBoxes = colors[level].map((color) => (
			<ColorBox key={v4()} background={color[format]} name={color.name} />
		));

		return (
			<div className='Palette'>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
				/>

				<div className='Palette-colors'>{colorBoxes} </div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
