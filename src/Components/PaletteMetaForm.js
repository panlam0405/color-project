import React from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";

export default function PaletteMetaForm(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
			<Button variant='outlined' onClick={handleClickOpen}>
				Open form dialog
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<ValidatorForm
						onSubmit={() => {
							savePalette(newPaletteName);
						}}>
						<TextValidator
							value={newPaletteName}
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
						<Button variant='contained' color='primary' type='submit'>
							Save Palette
						</Button>
					</ValidatorForm>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
