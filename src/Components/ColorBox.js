import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false,
		};
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true });
		setTimeout(() => this.setState({ copied: false }), 1200);
	}
	render() {
		// console.log(this.props.background);
		let { name, background } = this.props;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className='ColorBox' style={{ background: `${background}` }}>
					<div
						className={`copy-overlay ${this.state.copied ? "show" : ""}`}
						style={{ background: `${background}` }}
					/>
					<div className={`overlay-message ${this.state.copied ? "show" : ""}`}>
						<h1>copied !</h1>
						<p>{background}</p>
					</div>
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
