import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
	colorBox: {
		width: "20%",
		height: (props) => (props.showingFullColorPalette ? "25%" : "50%"),
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4.5px",
		"&:hover button": {
			opacity: "1",
			transition: ".7s",
		},
	},
	copyText: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.07 ? "#fff" : "#000",
	},
	colorName: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.08 ? "#fff" : "#000",
	},
	seeMore: {
		background: "rgba(255, 255, 255, 0.3)",
		position: "absolute",
		border: "none",
		right: "0px",
		bottom: "0px",
		color: (props) =>
			chroma(props.background).luminance() <= 0.65 ? "#fff" : "rgba(0,0,0,0.6)",
		width: "60px",
		height: "30px",
		textAlign: "center",
		lineHeight: "30px",
		textTransform: "uppercase",
	},
	copyButton: {
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "calc(50% - 15px)",
		left: "calc(50% - 50px)",
		cursor: "pointer",
		outline: "none",
		textAlign: "center",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		textTransform: "uppercase",
		border: "none",
		transition: "0.7s",
		textDecoration: "none",
		opacity: "0",
		color: (props) =>
			chroma(props.background).luminance() <= 0.07
				? "white"
				: "rgba(0,0,0,0.6)",
	},
};

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
		let {
			name,
			background,
			colorId,
			paletteId,
			showingFullColorPalette,
			classes,
		} = this.props;
		let isUnreadable = chroma(background).luminance() <= 0.07;
		// let isLightColor = chroma(background).luminance() >= 0.65;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div
					className={classes.colorBox}
					style={{ background: `${background}` }}>
					<div
						className={`copy-overlay ${this.state.copied ? "show" : ""}`}
						style={{ background: `${background}` }}
					/>
					<div className={`overlay-message ${this.state.copied ? "show" : ""}`}>
						<h1 className={classes.colorName}>copied !</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div className='copy-container'>
						<div className='box-content'>
							<span className={isUnreadable ? "light-text" : ""}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>

					{showingFullColorPalette && (
						<Link
							to={`/palette/${paletteId}/${colorId}`}
							onClick={(e) => e.stopPropagation()}>
							<span className={classes.seeMore}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
