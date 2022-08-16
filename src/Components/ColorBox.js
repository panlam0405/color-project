import React, { Component } from "react";
import "../styles/ColorBox.css";

class ColorBox extends Component {
	render() {
		console.log(this.props.background);
		let { color } = this.props.background;
		return (
			<div className='ColorBox' style={{ background: `${color}` }}>
				smthing
				<span></span>
			</div>
		);
	}
}

export default ColorBox;
