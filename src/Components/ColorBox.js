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
	boxContent: {
		position: "absolute",
		width: "90%",
		left: "0px",
		bottom: "0px",
		padding: "10px",
		color: "black",
		letterSpacing: "1px",
		texttransform: "uppercase",
		fontSize: "12px",
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
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transform: "scale(0.1)",
		transition: "transform 0.7s ease-in-out",
	},
	showOverlay: {
		opacity: "1",
		zIndex: "10",
		transform: "scale(30)",
		position: "absolute",
	},
	overlayMessage: {
		position: "fixed",
		top: "0",
		bottom: "0",
		right: "0",
		left: "0",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		fontSize: "2.5rem",
		opacity: "0",
		transform: "scale(0)",
		color: "white",
		transition: "transform 0.7s ease-in-out",
		transitionDelay: "300ms",
		"& h1": {
			fontWeight: "400",
			textShadow: " 1px 2px #000",
			background: "rgba(255, 255, 255, 0.2)",
			width: "100%",
			textAlign: "center",
			margin: "0",
			padding: "1rem",
			textTransform: "uppercase",
		},
		"& p": {
			fontSize: "2rem",
			fontWeight: "100",
		},
	},
	overlayMessageShow: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "25",
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
		// let isUnreadable = chroma(background).luminance() <= 0.07;
		// let isLightColor = chroma(background).luminance() >= 0.65;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div
					className={classes.colorBox}
					style={{ background: `${background}` }}>
					<div
						className={`${classes.copyOverlay} ${
							this.state.copied && classes.showOverlay
						}`}
						style={{ background: `${background}` }}
					/>
					<div
						className={`${classes.overlayMessage} ${
							this.state.copied && classes.overlayMessageShow
						}`}>
						<h1 className={classes.copyText}>copied !</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
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
