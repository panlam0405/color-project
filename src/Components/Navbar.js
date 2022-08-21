import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex",
			open: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleChange(e) {
		this.setState({ format: e.target.value });
		this.props.handleChange(e);
		this.setState({ open: true });
	}

	closeSnackbar() {
		this.setState({ open: false });
	}
	render() {
		const { format, open } = this.state;
		return (
			<header className='Navbar'>
				<div className='logo'>
					<Link to='/'>Colorboxes</Link>
				</div>

				<div className='color-slider'>
					<div className='slider-level'>
						<span>Level : {this.props.level} </span>
						<div className='slider'>
							<Slider
								defaultValue={this.props.level}
								min={100}
								max={900}
								step={100}
								onAfterChange={this.props.changeLevel}
							/>
						</div>
					</div>
				</div>
				<div className='select-container'>
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value='hex'>Hex - #00000</MenuItem>
						<MenuItem value='rgb'>Rgb - rgb(250,250,250)</MenuItem>
						<MenuItem value='rgba'>Rgba - rgb(250,250,250,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={open}
					autoHideDuration={3000}
					message={
						<span id='snasckbar-msg-id'>Format changed to {format}</span>
					}
					ContentProps={{ "aria-describedby": "snasckbar-message-id" }}
					onClose={this.closeSnackbar}
					action={
						<IconButton
							onClick={this.closeSnackbar}
							color='inherit'
							key='close'
							aria-label='close'>
							<CloseIcon />
						</IconButton>
					}
				/>
			</header>
		);
	}
}

export { Navbar };
