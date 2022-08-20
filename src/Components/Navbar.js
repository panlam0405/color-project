import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<header className='Navbar'>
				<div className='logo'>
					<a href='/'>Colorboxes</a>
				</div>
				<div className='slider-level'>Level : {this.props.level} </div>
				<div className='color-slider'>
					<Slider
						defaultValue={this.props.level}
						min={100}
						max={900}
						step={100}
						onAfterChange={this.props.changeLevel}
					/>
				</div>
			</header>
		);
	}
}

export { Navbar };
