import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  container: {
    width: "100%",
    height: "calc(100vh - 80px)",
    background: "rgba(0,0,0,0.8)",
    zIndex: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    zIndex: 5,
    background: "#000",
    width: 550,
    height: 300,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    color: "#fff",
    // border: "red solid 5px",
    boxShadow: "0px 0px 50px 50px #000",

  },
  link: {
    textDecoration: "none",
    color: "#000",
    marginTop: 40,
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
  square: {
    border: "#555 solid 5px",
    position: "fixed",
    top: -60,
    left: 10,
    height: 500,
    width: 600,
    background: "#011",
    transform: "rotate(40deg)",
  },
}));
export const Welcome = ({ parseMovie, user }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <Typography variant="h3">Welcome {user}</Typography>
        <Link className={classes.link} to={parseMovie ? "/movie_info" : "/"}>
          <Button variant="contained" color="inherit">
            Let's Go
          </Button>
        </Link>
      </div>
      <div className={classes.circle} />
      <div className={classes.square} />
    </div>
  );
};
