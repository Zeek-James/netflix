import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

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
  mess: {
    zIndex: 5,
    background: "#222",
    width: 550,
    height: 300,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    color: "#fff",
    border: "#fff solid 5px",
  },
  circle: {
    border: "#555 solid 200px",
    position: "fixed",
    top: 100,
    left: 900,
    borderRadius: "50%",
    height: 600,
    width: 800,
    background: "#111",
  },
  square: {
    border: "#777 solid 5px",
    position: "fixed",
    top: -60,
    left: 10,
    height: 500,
    width: 600,
    background: "#333",
    transform: "rotate(40deg)",
  },
}));

export const BigMess = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.mess}>
        <Typography variant="h1">Big Mess</Typography>
      </div>
      <div className={classes.circle} />
      <div className={classes.square} />
    </div>
  );
};
