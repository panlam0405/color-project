import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { styles } from "../styles/ColorBox.styles";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ClassNames from "classnames";

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
		const { copied } = this.state;
		// let isUnreadable = chroma(background).luminance() <= 0.07;
		// let isLightColor = chroma(background).luminance() >= 0.65;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div
					className={classes.colorBox}
					style={{ background: `${background}` }}>
					<div
						className={ClassNames(classes.copyOverlay, {
							[classes.showOverlay]: copied,
						})}
						style={{ background: `${background}` }}
					/>
					<div
						className={ClassNames(classes.overlayMessage, {
							[classes.overlayMessageShow]: copied,
						})}>
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
