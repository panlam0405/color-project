import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNavbar from "./PaletteFormNavbar";
import ColorPickerForm from "./ColorPickerForm";
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
	const { palettes, maxLength } = props;

	const classes = useStyles();
	const theme = useTheme();
	const navigate = useNavigate();

	const [open, setOpen] = React.useState(true);
	const [currentColor, setColor] = React.useState("#346efc");
	const [colors, setColorsArray] = React.useState(palettes[0].colors);
	const [newColorName, isValidated] = React.useState("");
	const [newPaletteName, setNewPalettename] = React.useState("");

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addnewColor = () => {
		const newColor = { color: currentColor, name: newColorName };
		setColorsArray([...colors, newColor]);
		isValidated("");
	};

	const handleChange = (e) => {
		if (e.target.name === "setNewColorName") isValidated(e.target.value);
		else if (e.target.name === "setNewPalletteName")
			setNewPalettename(e.target.value);
	};

	const handleDelete = (colorName) => {
		let newColors = colors.filter(({ name }) => name !== colorName);
		setColorsArray(newColors);
	};

	const savePalette = (newPaletteName) => {
		let newName = newPaletteName;
		const newPalette = {
			paletteName: newName,
			id: newName.toLocaleLowerCase().replaceAll(" ", "-"),
			colors: colors,
		};

		props.savePalette(newPalette);
		navigate("/");
	};

	const clearPalette = () => {
		setColorsArray([]);
	};
	const addRandomColor = () => {
		// pick from the existing colors in the Palettes
		const allColors = palettes.map((palette) => palette.colors).flat();
		let index = Math.floor(Math.random() * allColors.length);
		let isColorUsed = colors.some(
			(color) => color.name === allColors[index].name
		);
		let randomColor = allColors[index];
		if (isColorUsed) addRandomColor();
		else setColorsArray([...colors, randomColor]);
	};

	return (
		<div className={classes.root}>
			<PaletteFormNavbar
				savePalette={savePalette}
				classes={classes}
				open={open}
				setOpen={setOpen}
			/>
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
					<Button variant='contained' color='secondary' onClick={clearPalette}>
						Clear Palette
					</Button>
					<Button
						variant='contained'
						color='primary'
						onClick={addRandomColor}
						disabled={maxLength <= colors.length}>
						Random Color
					</Button>
				</div>
				<ColorPickerForm
					currentColor={currentColor}
					setColor={setColor}
					colors={colors}
					maxLength={maxLength}
					handleChange={handleChange}
					newColorName={newColorName}
					addnewColor={addnewColor}
					palettes={palettes}
				/>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
				<DraggableColorList colors={colors} del={handleDelete} axis='xy' />
			</main>
		</div>
	);
}

NewPaletteForm.defaultProps = {
	maxLength: 20,
};

export default NewPaletteForm;
