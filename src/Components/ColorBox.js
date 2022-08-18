import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

class ColorBox extends Component {
	render() {
		console.log(this.props.background);
		let { name, color } = this.props.background;
		return (
			<CopyToClipboard text={color}>
				<div className='ColorBox' style={{ background: `${color}` }}>
					<div className='copy-container'>
						<div className='box-content'>
							<span>{name}</span>
						</div>
						<button className='copy-button'>Copy</button>
					</div>
					<span className='colorbox-more'>More</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
