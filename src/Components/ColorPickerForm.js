import React, { useEffect } from "react";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
