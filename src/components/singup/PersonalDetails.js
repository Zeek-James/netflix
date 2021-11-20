import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.4)",
    height: "100%",
  },
  usdContainer: {
    width: "100%",
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  psd: {
    // background: "#fff",
    minWidth: 450,
    minHeight: 300,
    borderRadius: 20,
  },

  header: {
    padding: 20,
    color: "red",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 50px",
  },

  textField: {
    marginBottom: 20,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  circle: {
    border: "#500 solid 200px",     
    position: "fixed",
    top: 100,
    left: 900,
    borderRadius: "50%",
    height: 600,
    width: 800,
    background: "#111",
  },

  circle2: {
    border: "#555 solid 200px",     
    position: "fixed",
    top: -800,
    left: -900,
    borderRadius: "50%",
    height: 1000,
    width: 1000,
    background: "#111",
  },
}));

export const PersonalDetails = ({
  details,
  title,
  handleOnChange,
  prevStep,
  nextStep,
}) => {
  const [error, setError] = useState("");
  const handleNextStep = () => {
    if (details.password !== details.confirmPassword) {
      return setError("Password doesn't match");
    }
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const classes = useStyle();

  return (
      <div className={classes.container} >
    <div className={classes.usdContainer}>
      <Typography className={classes.header} variant="h4">
        {title}
      </Typography>
      <Box className={classes.psd}>
        <form onSubmit={handleNextStep} className={classes.formContainer}>
          <TextField
            variant="outlined"
            onChange={handleOnChange("country")}
            className={classes.textField}
            label="Country"
            type=""
            value={details.country}
            required
          />
          <TextField
            type="text"
            className={classes.textField}
            variant="outlined"
            onChange={handleOnChange("age")}
            label="age"
            value={details.age}
            required
          />
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            onChange={handleOnChange("password")}
            label="Password"
            type="password"
            value={details.password}
            helperText={error}
          />
          <TextField
            required
            variant="outlined"
            onChange={handleOnChange("confirmPassword")}
            label="Confirm Password"
            type="password"
            value={details.confirmPassword}
            helperText={error}
          />
          <div className={classes.footer}>
            <Button
              style={{ background: "#000", color: "red" }}
              variant="contained"
              onClick={handlePrevStep}
            >
              back
            </Button>
            <Button
              style={{ background: "#000", color: "red" }}
              type="submit"
              variant="contained"
              onClick={handleNextStep}
            >
              next
            </Button>
          </div>
        </form>
      </Box>
      </div>
      <div className={classes.circle} />
      <div className={classes.circle2} />

    </div>
  );
};
