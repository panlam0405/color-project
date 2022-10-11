import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function PaletteMetaForm(props) {
	const { open, handleFormClicks } = props;

	const { handleChange, newPaletteName, savePalette, palettes } = props;

	useEffect(() => {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			const found = palettes.some(({ paletteName }) => value === paletteName);
			if (found) return false;
			return true;
		});
	});
	return (
		<div>
			<Dialog open={open} onClose={handleFormClicks}>
				<DialogTitle>Choose A Palette Name</DialogTitle>
				<ValidatorForm
					onSubmit={() => {
						savePalette(newPaletteName);
					}}>
					<DialogContent>
						<Picker data={data} onEmojiSelect={console.log} />
						<DialogContentText>
							Choose a name for your new beautiful palette. Make sure it's
							Unique!
						</DialogContentText>

						<TextValidator
							value={newPaletteName}
							fullWidth
							margin='normal'
							name='setNewPalletteName'
							label='palleteName'
							variant='filled'
							onChange={handleChange}
							validators={["required", "isPaletteNameUnique"]}
							errorMessages={[
								"The Palettes Name Needs To Be Filled",
								"This name already exists",
							]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleFormClicks}>Cancel</Button>
						<Button variant='contained' color='primary' type='submit'>
							Save Palette
						</Button>{" "}
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
}
