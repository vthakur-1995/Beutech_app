import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { boolean } from "yup";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
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

const validateForm = yup.object({
  user: yup.string().email("enter valid email!").required("email is required"),
  password: yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/)
    .required("password is required"),
});

const FormikScreen = () => {
  const classes = useStyles();

  const formikState = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validateForm,
  });

  return (
    <div className={classes.root}>
      <form onSubmit={formikState.handleSubmit} className="form1">
        <Typography variant="h2" className={classes.typo1}>
          Material UI Form
        </Typography>
        <TextField
          id="user"
          name="user"
          label="User"
          variant="outlined"
          fullWidth
          className={classes.input}
          autoComplete="off"
          value={formikState.values.user}
          onChange={formikState.handleChange}
          error={formikState.touched.user && boolean(formikState.errors.user)}
          helperText={
            formikState.touched.user && boolean(formikState.errors.user)
          }
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          className={classes.input}
          autoComplete="off"
          value={formikState.values.password}
          onChange={formikState.handleChange}
          error={
            formikState.touched.password && boolean(formikState.errors.password)
          }
          helperText={
            formikState.touched.password && boolean(formikState.errors.password)
          }
        />
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormikScreen;
