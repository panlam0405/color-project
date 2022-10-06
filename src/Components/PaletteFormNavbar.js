import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

function PaletteFormNavbar(props) {
	const { savePalette, open, setOpen } = props;
	const { classes } = props;
	const [newColorName, isValidated] = React.useState("");
	const [newPaletteName, setNewPalettename] = React.useState("");

	const handleDrawerOpen = () => {
		setOpen(!open);
	};
	const handleChange = (e) => {
		if (e.target.name === "setNewColorName") isValidated(e.target.value);
		else if (e.target.name === "setNewPalletteName")
			setNewPalettename(e.target.value);
	};

	return (
		<div>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
				color='default'>
				<Toolbar disableGutters={!open}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						Add new Palette
					</Typography>
					<ValidatorForm
						onSubmit={() => {
							savePalette(newPaletteName);
						}}>
						<Button variant='contained' color='primary' type='submit'>
							Save Palette
						</Button>
						<Link to='/'>
							<Button variant='contained' color='secondary'>
								Go Back
							</Button>
						</Link>

						<TextValidator
							value={newPaletteName}
							name='setNewPalletteName'
							label='palleteName'
							onChange={handleChange}
							validators={["required", "isPaletteNameUnique"]}
							errorMessages={[
								"The Palettes Name Needs To Be Filled",
								"This name already exists",
							]}
						/>
					</ValidatorForm>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default PaletteFormNavbar;
