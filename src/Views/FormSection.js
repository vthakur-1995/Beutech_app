import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // backgroundColor: theme.palette.primary.main,
      height: "auto",
      marginTop: "40px",
    },
    typo1: {
      marginBottom: 40,
      color: "#2196f3",
    },
    input: {
      marginBottom: 20,
    },
  })
);

const FormSection = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);

  const classes = useStyles();

  const [passwordItem, setPasswordItem] = useState({
    passErr: "",
    isPassErr: false,
  });

  const [userItem, setUserItem] = useState({
    userErr: "",
    isUserErr: false,
  });

  const navigate = useNavigate();

  var pass_rgex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/;
  var user_rgex = /^[a-z]*$/;

  const userHandler = (e) => {
    setUser(e.target.value);
    if (e.target.value.match(user_rgex)) {
      setUserItem({
        userErr: "",
        isUserErr: false,
      });
    } else {
      setUserItem({
        userErr: "should be lower case format",
        isUserErr: true,
      });
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.match(pass_rgex)) {
      setPasswordItem({
        passErr: "",
        isPassErr: false,
      });
    } else {
      setPasswordItem({
        passErr:
          "Password should contain small and alphabet,number,special char",
        isPassErr: true,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    password.trim() !== ""
      ? setPasswordItem({
          passErr: "",
          isPassErr: false,
        })
      : setPasswordItem({
          passErr: "password is required",
          isPassErr: true,
        });
    user.trim() !== ""
      ? setUserItem({
          isUserErr: false,
          userErr: "",
        })
      : setUserItem({
          isUserErr: true,
          userErr: "username is required",
        });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={submitHandler} className="form1">
        <Typography variant="h2" className={classes.typo1}>
          Material UI Form
        </Typography>
        <TextField
          id="user"
          label="User"
          variant="outlined"
          fullWidth
          className={classes.input}
          autoComplete="off"
          onChange={userHandler}
          error={userItem.isUserErr}
          helperText={userItem.userErr}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          className={classes.input}
          autoComplete="off"
          onChange={passwordHandler}
          error={passwordItem.isPassErr}
          helperText={passwordItem.passErr}
        />
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
