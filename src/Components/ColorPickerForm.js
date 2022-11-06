import React, { useEffect } from "react";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useStyles } from "../styles/ColorPickerForm.styles";

export default function ColorPickerForm(props) {
	const {
		currentColor,
		setColor,
		addnewColor,
		newColorName,
		handleChange,
		maxLength,
		colors,
	} = props;
	const classes = useStyles();

	useEffect(() => {
		ValidatorForm.addValidationRule("colorNameExists", (value) => {
			const found = colors.some(
				(color) => color.name.toLocaleLowerCase() === value.toLocaleLowerCase()
			);
			if (found) return false;
			return true;
		});
		ValidatorForm.addValidationRule("colorExists", () => {
			const found = colors.some(({ color }) => color === currentColor);
			if (found) return false;
			return true;
		});
	});
	return (
		<div style={{ width: "100%" }}>
			<ChromePicker
				className={classes.picker}
				color={currentColor}
				onChangeComplete={(newColor) => setColor(newColor.hex)}
			/>
			<ValidatorForm onSubmit={addnewColor}>
				<TextValidator
					value={newColorName}
					variant='filled'
					margin='normal'
					name='setNewColorName'
					onChange={handleChange}
					validators={["required", "colorNameExists", "colorExists"]}
					errorMessages={[
						"This field is required",
						"This color name already exists",
						"This color is already picked",
					]}
					className={classes.colorInputName}
					placeholder='Color Name'
				/>

				<Button
					style={{ backgroundColor: `${currentColor}` }}
					variant='contained'
					color='primary'
					type='submit'
					disabled={maxLength <= colors.length}
					className={classes.addColor}>
					Add Color
				</Button>
			</ValidatorForm>
		</div>
	);
}
