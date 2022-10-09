import React from "react";
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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import DraggableColorList from "./DraggableColorList";
import { Link } from "react-router-dom";
import PaletteFormNavbar from "./PaletteFormNavbar";
import { useEffect } from "react";

export default function ColorPickerForm(props) {
	const {
		currentColor,
		setColor,
		addnewColor,
		newColorName,
		handleChange,
		maxLength,
		colors,
		palettes,
	} = props;

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
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			const found = palettes.some(({ paletteName }) => value === paletteName);
			if (found) return false;
			return true;
		});
	});
	return (
		<div>
			<ChromePicker
				color={currentColor}
				onChangeComplete={(newColor) => setColor(newColor.hex)}
			/>
			<ValidatorForm onSubmit={addnewColor}>
				<TextValidator
					value={newColorName}
					name='setNewColorName'
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
					type='submit'
					disabled={maxLength <= colors.length}>
					Add Color
				</Button>
			</ValidatorForm>
		</div>
	);
}
