import { Box, makeStyles, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  container: {
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  congrats: {
    zIndex:1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    minHeight: 200,
    minWidth: 400,
    background: "#fff",
    borderRadius: 40,
    padding: 15,
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },

  grid: {
    flexGrow: 1,
  },
  exit: {
    color: "#111",
  },
  circle: {
    border: "#000 solid 200px",
    position: "fixed",
    top: -100,
    left: 100,
    borderRadius: "50%",
    height: 1200,
    width: 1000,
    background: "rgba(0,0,0,0.1)",
    transform: "rotate(120deg)",
  },
}));
export const Success = ({ user }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
        <Box className={classes.congrats}>
          <Box className={classes.header}>
            <div className={classes.grid} />
            <Link to="/login" className={classes.exit}>
              <ExitToAppIcon />
            </Link>
          </Box>
          <Typography variant="h4">Congratulations</Typography>

          <Typography variant="h5">{user}</Typography>
          <Typography variant="body1">
            Your account has been successfully created
          </Typography>
        </Box>
      <div className={classes.circle} />
    </div>
  );
};
