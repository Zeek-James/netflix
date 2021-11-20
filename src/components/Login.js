import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Welcome } from "./Welcome";

const useStyles = makeStyles(() => ({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#555",
    height: "calc(100vh - 80px)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  loginForm: {
    borderRadius: 10,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    minWidth: 400,
    justifyContent: "space-between",
    minHeight: 250,
  },
  loginBtn: {
    color: "red",
    textDecoration: "none",
  },
  circle: {
    border: "#410 solid 200px",
    position: "fixed",
    top: -300,
    left: 800,
    borderRadius: "50%",
    height: 700,
    width: 500,
    background: "#333",
  },
  square: {
    border: "#011 solid 50px",
    position: "fixed",
    top: 300,
    left: -70,
    height: 500,
    width: 600,
    background: "#001",
    transform: "rotate(40deg)",
  },

  errMsg: {
    minHeight: 35,
  },

  errShow: {
    borderRadius: 5,
    background: "pink",
    border: "solid 1px red",
    minHeight: 5,
    padding: 4,
    paddingLeft: 10,
    width: "100%",
    color: "red",
    visibility: "visible",
  },
}));
export const Login = ({ setLoggedIn }) => {
  const classes = useStyles();
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      const foundUser = JSON.parse(loggedIn);
      setUser(foundUser);
    }
  }, [setUser]);

  const getMovie = localStorage.getItem("movie");

  const parseMovie = JSON.parse(getMovie);

  const handleChange = (input) => (e) => {
    e.preventDefault();
    setDetails({ ...details, [input]: e.target.value });
  };

  const saveToLocal = () =>
    localStorage.setItem("user", JSON.stringify(details));

  const handleSubmit = (e) => {
    e.preventDefault();

    const getLocal = localStorage.getItem("details");
    const admin = getLocal !== null ? JSON.parse(getLocal) : null;

    try {
      if (admin === null) {
        return setErrMsg("User details not found");
      }

      if (details.userName === "" || details.password === "") {
        return setErrMsg("Please fill in details");
      }

      if (        details.userName !== admin.userName ||
        details.password !== admin.password) {
        return setErrMsg("Incorrect details");
      }


      if (
        details.userName === admin.userName &&
        details.password === admin.password
      ) {
        setUser({
          userName: details.userName,
          password: details.password,
        });
        saveToLocal();
        setLoggedIn(true);
        setErrMsg('')
      }
    } catch (error) {
      console.log(error);
    }

    setDetails({
      email: "",
      userName: "",
      password: "",
    });
  };

  return (
    <div>
      {user.userName === "" ? (
        <div className={classes.loginContainer}>
          <Box className={classes.container}>
            <Typography variant="h4" style={{ marginBottom: 20 }}>
              LOGIN
            </Typography>
            <form className={classes.loginForm}>
              <Typography className={errMsg ? classes.errShow : classes.errMsg}>
                {errMsg}
              </Typography>
              <TextField
                type="text"
                label="User Name"
                variant="outlined"
                fullWidth
                value={details.userName}
                onChange={handleChange("userName")}
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                onChange={handleChange("password")}
                value={details.password}
              />
              <Button
                className={classes.loginBtn}
                onClick={handleSubmit}
                variant="contained"
                style={{ background: "#000", color: "red" }}
              >
                Login
              </Button>
            </form>
          </Box>
          <div className={classes.circle} />
          <div className={classes.square} />
        </div>
      ) : (
        <Welcome parseMovie={parseMovie} user={user.userName} />
      )}
    </div>
  );
};
