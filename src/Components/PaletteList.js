import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { styles } from "../styles/PaletteList.styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { CheckCircle, CloseRounded } from "@material-ui/icons";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDialogOpen: false,
			id: "",
		};
		this.handleDialogWindow = this.handleDialogWindow.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDialogWindow(e, id) {
		e.stopPropagation();
		this.setState({ isDialogOpen: !this.state.isDialogOpen });
		if (id) {
			this.setState({ id });
		}
	}
	handleDelete() {
		this.props.removePalette(this.state.id);
		this.setState({ isDialogOpen: !this.state.isDialogOpen });
	}

	gotoPalette(id) {
		this.props.history(`/palette/${id}`);
	}

	render() {
		const { isDialogOpen } = this.state;
		const { palettes, classes } = this.props;
		let paletteLinks = palettes.map((palette) => (
			<MiniPalette
				key={v4()}
				{...palette}
				handleClick={() => this.gotoPalette(palette.id)}
				id={palette.id}
				openDialog={this.handleDialogWindow}
			/>
		));
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to='/palette/new'>Create a new Palette</Link>
					</nav>
					<div className={classes.palettes}>{paletteLinks}</div>
				</div>
				<Dialog open={isDialogOpen} onClose={this.handleDialogWindow}>
					<DialogTitle> Delete this palette</DialogTitle>
					<List>
						<ListItem button={true} onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{ backgroundColor: blue[100], color: blue[600] }}>
									<CheckCircle />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete Palette</ListItemText>
						</ListItem>

						<ListItem button={true} onClick={this.handleDialogWindow}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
									<CloseRounded />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Keep It</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
