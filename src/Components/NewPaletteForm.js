import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import DraggableColorBox from "./DraggableColorBox";
import { v4 } from "uuid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
		height: "calc(100vh - 64px)",
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

function NewPaletteForm(props) {
	const classes = useStyles();
	const theme = useTheme();
	const navigate = useNavigate();

	const [open, setOpen] = React.useState(true);
	const [currentColor, setColor] = React.useState("#346efc");
	const [colors, setColorsArray] = React.useState([]);
	const [newColorName, isValidated] = React.useState("");

	useEffect(() => {
		ValidatorForm.addValidationRule("colorNameExists", (value) => {
			const found = colors.some(
				(color) => color.name.toLocaleLowerCase() === value.toLocaleLowerCase()
			);
			if (found) return false;
			return true;
		});
		ValidatorForm.addValidationRule("colorExists", (value) => {
			const found = colors.some(({ color }) => color === currentColor);
			if (found) return false;
			return true;
		});
	}, [currentColor]);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addnewColor = () => {
		const newColor = { color: currentColor, name: newColorName };
		setColorsArray([...colors, newColor]);
		isValidated("");
	};

	const handleChange = (e) => {
		isValidated(e.target.value);
	};
	const savePalette = () => {
		let newName = "New test palette";
		const newPalette = {
			paletteName: newName,
			id: newName.toLocaleLowerCase().replaceAll(" ", "-"),
			colors: colors,
		};

		props.savePalette(newPalette);
		navigate("/");
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
				<Toolbar>
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
					<Button variant='contained' color='primary' onClick={savePalette}>
						{" "}
						Save Palette
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<Typography variant='h4'>Design Your Palette</Typography>
				<div>
					<Button variant='contained' color='secondary'>
						Clear Palette
					</Button>
					<Button variant='contained' color='primary'>
						Random Color
					</Button>
				</div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={(newColor) => setColor(newColor.hex)}
				/>
				<ValidatorForm onSubmit={addnewColor}>
					<TextValidator
						value={newColorName}
						onChange={handleChange}
						validators={["required", "colorNameExists", "colorExists"]}
						errorMessages={[
							"This field is required",
							"This color name already exists",
							"This color is already picked",
						]}
					/>

					<Button
						style={{ backgroundColor: `${currentColor}` }}
						variant='contained'
						color='primary'
						type='submit'>
						Add Color
					</Button>
				</ValidatorForm>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />

				{colors.map((col) => (
					<DraggableColorBox key={v4()} color={col.color} name={col.name} />
				))}
			</main>
		</div>
	);
}

export default NewPaletteForm;
