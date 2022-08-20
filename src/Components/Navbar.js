import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ format: e.target.value });
		this.props.handleChange(e);
	}
	render() {
		const { format } = this.state;
		return (
			<header className='Navbar'>
				<div className='logo'>
					<a href='/'>Colorboxes</a>
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
			</header>
		);
	}
}

export { Navbar };
