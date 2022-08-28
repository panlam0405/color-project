import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

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
		let { name, background, colorId, paletteId, showLink } = this.props;
		let isUnreadable = chroma(background).luminance() <= 0.07;
		let isLightColor = chroma(background).luminance() >= 0.65;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className='ColorBox' style={{ background: `${background}` }}>
					<div
						className={`copy-overlay ${this.state.copied ? "show" : ""}`}
						style={{ background: `${background}` }}
					/>
					<div className={`overlay-message ${this.state.copied ? "show" : ""}`}>
						<h1 className={isLightColor ? "dark-text" : ""}>copied !</h1>
						<p className={isLightColor ? "dark-text" : ""}>{background}</p>
					</div>
					<div className='copy-container'>
						<div className='box-content'>
							<span className={isUnreadable ? "light-text" : ""}>{name}</span>
						</div>
						<button
							className={`copy-button ${isLightColor ? "dark-text" : ""}`}>
							Copy
						</button>
					</div>

					{showLink && (
						<Link
							to={`/palette/${paletteId}/${colorId}`}
							onClick={(e) => e.stopPropagation()}>
							<span
								className={`colorbox-more ${isLightColor ? "dark-text" : ""}`}>
								More
							</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
