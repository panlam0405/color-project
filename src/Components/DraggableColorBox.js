import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( () => ( {
    root: {
        width: "20%",
		height: '25%',
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4.5px",
    }
}))

function DraggableColorBox( props ) {
    const { color } = props;
    const classes = useStyles();

  return (
      <div className={classes.root} style={{backgroundColor:color}}>
          {color}
    </div>
  )
}

export default DraggableColorBox;