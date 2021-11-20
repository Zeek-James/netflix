import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  usdContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.8)",
    height: "100%",
  },

  container: {
    background: "#fff",
    width: 400,
    borderRadius: 15,
    padding: 20,
    zIndex:1
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#000",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    color: "red",
  },
  formContainer: {
    margin: 30,
  },
  textField: {
    marginBottom: 15,
  },
  formBtn: {
    marginTop: 25,
    width: "100%",
    display: "flex",

    justifyContent: "center",
  },

  rec: {
    border: "#111 solid 90px",     
    position: "fixed",
    top: 300,
    left: 1000,
    height: 900,
    width: 400,
    background: "#577",
  },
  square: {
    border: "#555 solid 5px",
    position: "fixed",
    // top: -60,
    left: 100,
    height: 400,
    width: 400,
    background: "#011",
  },

}));
export const UserDetails = ({ details, nextStep, title, handleOnChange }) => {
  const classes = useStyles();

  const handleNextStep = () => {
    nextStep();
  };

  return (
    <Box className={classes.usdContainer}>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <form className={classes.formContainer} onSubmit={handleNextStep}>
          <TextField
            className={classes.textField}
            label="First Name"
            onChange={handleOnChange("firstName")}
            value={details.firstName}
            fullWidth
            required
          />
          <TextField
            className={classes.textField}
            label="Last Name"
            onChange={handleOnChange("lastName")}
            value={details.lastName}
            fullWidth
            required
          />
          <TextField
            className={classes.textField}
            label="User Name"
            onChange={handleOnChange("userName")}
            value={details.userName}
            fullWidth
            required
          />
          <TextField
            className={classes.textField}
            label="Email"
            onChange={handleOnChange("email")}
            value={details.email}
            fullWidth
            required
          />
          <Box className={classes.formBtn}>
            <Button
              style={{ background: "#000", color: "red" }}
              variant="contained"
              type="submit"
            >
              Next
            </Button>
          </Box>
        </form>
      </Box>
      <div className={classes.rec} />
      <div className={classes.square} />
    </Box>
  );
};
