import React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
  
root:{
  padding: " 20px 5rem" 
},
typo1:{
  marginBottom: 20, 
  color: "#2196f3" 
}

  })
);

const Project1 = () => {

  const classes=useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.typo1}>
        React Material UI
      </Typography>
      {[1, 2, 3, 4, 5].map((item) => (
        <Typography
          style={{ textAlign: "left", marginBottom: 20, color: grey[400] }}
          variant="subtitle1"
        >
          Material-UI uses rem units for the font size. The browser element
          default font size is 16px, but browsers have an option to change this
          value, so rem units allow us to accommodate the user's settings,
          resulting in a better accessibility support. Users change font size
          settings for all kinds of reasons, from poor eyesight to choosing
          optimum settings for devices that can be vastly different in size and
          viewing distance.
        </Typography>
      ))}

      <Button variant="contained" color="primary">
        PRIMARY
      </Button>
      <Link to="/form" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary" style={{ margin: 20 }}>
          LINK TO FORM
        </Button>
      </Link>
    </div>
  );
};

export default Project1;
