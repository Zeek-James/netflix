import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    background: "#222",
    width: 250,
    height: 100,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));
export const PleaseLogin = ({ isLogged, setIsLogged }) => {
  const classes = useStyle();
  return (
    <div className={classes.container} onClick={() => setIsLogged(!isLogged)}>
      <div className={classes.login}>
        <Link to="/login" className={classes.link}>
          <Button onClick={() => setIsLogged(!isLogged)} variant="contained" color="inherit">
            Please Login
          </Button>
        </Link>
      </div>
    </div>
  );
};
