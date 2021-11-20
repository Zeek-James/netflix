import React from "react";
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  nav: {
    height: 80,
    display: "flex",
    justifyContent: "center",
    color: "red",
    background: "#000",
  },
  grid: {
    flexGrow: 1,
  },
  navBtn: {
    color: "red",
    textDecoration: "none",
    margin: 5,
  },
  header: {
    color: "red",
    textDecoration: "none",
  },
}));
export const Navbar = ({ loggedIn, setLoggedIn }) => {
  const classes = useStyle();

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  };
  return (
    <AppBar className={classes.nav}>
      <Toolbar>
        <Link to="/" className={classes.header}>
          <Typography variant="h3" color="inherit">
            NETFLIX
          </Typography>
        </Link>
        <div className={classes.grid} />
        {!loggedIn ? (
          <Box>
            <Link className={classes.navBtn} to="/signup">
              <Button variant="text" color="inherit">
                Sign Up
              </Button>
            </Link>
            <Link className={classes.navBtn} to="/login">
              <Button variant="outlined" color="inherit">
                Login
              </Button>
            </Link>
          </Box>
        ) : (
          <Button variant="outlined" color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
