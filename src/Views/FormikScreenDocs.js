import React from "react";
import { useFormik } from "formik";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import * as yup from "yup";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/.test(values.password)) {
    errors.password = "should contain Ab@1";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    root: {
      height: "auto",
      marginTop: "40px",
      padding: "40px",
      width: "20vw",
      height: "50vh",
      backgroundColor: "#fff",
      borderRadius: "20px",
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

export const SignupForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/,
          " One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Typography className={classes.input} variant="h4">
          Sign up
        </Typography>
        <TextField
          className={classes.input}
          id="email"
          label="Email Address"
          name="email"
          type="email"
          // autoComplete="off"
          inputProps={{
            autoComplete: "off",
            // form: {
            //   autoComplete: "off",
            // },
          }}
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : null}
        />
        <TextField
          className={classes.input}
          id="password"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          autoComplete="off"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
          helperText={formik.errors.password ? formik.errors.password : null}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
