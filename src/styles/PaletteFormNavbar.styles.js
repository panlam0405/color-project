import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../constants";
import sizes from "./sizes";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "64px",
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
		marginLeft: theme.spacing(1),
	},
	hide: {
		display: "none",
	},
	navBtns: {
		marginRight: "0.5rem",
		[sizes.down("xs")]: {
			marginRight: "0",
		},
	},
	button: {
		margin: "0 0.5rem",
		[sizes.down("xs")]: {
			margin: "0 0.2rem",
		},
		padding: "6px  !important",
	},
	link: {
		textDecoration: "none",
	},
}));
