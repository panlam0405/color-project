import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import { useStyles } from "../styles/PaletteFormNavbar.styles";

function PaletteFormNavbar(props) {
	const {
		palettes,
		savePalette,
		open,
		setOpen,
		newPaletteName,
		setNewPalettename,
		isValidated,
	} = props;
	const classes = useStyles();

	const handleDrawerOpen = () => {
		setOpen(!open);
	};
	const handleChange = (e) => {
		if (e.target.name === "setNewColorName") isValidated(e.target.value);
		else if (e.target.name === "setNewPalletteName")
			setNewPalettename(e.target.value);
	};

	const [formShow, setFormShow] = useState(false);

	const handleFormClicks = () => {
		setFormShow(!formShow);
	};
	return (
		<div className={classes.root}>
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
				</Toolbar>
				<div className={classes.navBtns}>
					{/*  */}

					<Link to='/' className={classes.link}>
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}>
							Go Back
						</Button>
					</Link>
					<Button
						variant='contained'
						color='primary'
						onClick={handleFormClicks}
						className={classes.button}>
						Save Palette
					</Button>
				</div>
			</AppBar>
			{formShow && (
				<PaletteMetaForm
					newPaletteName={newPaletteName}
					handleChange={handleChange}
					savePalette={savePalette}
					palettes={palettes}
					open={formShow}
					handleFormClicks={handleFormClicks}
				/>
			)}
		</div>
	);
}

export default PaletteFormNavbar;
