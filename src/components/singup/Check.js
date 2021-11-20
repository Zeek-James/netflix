import React from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles(() => ({
  container: {
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.1)",
  },

  listContainer: {
    zIndex:1,
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    marginBottom: 20,
    color: "red",
  },

  list: {
    background: "#fff",
    width: 350,
    minHeight: 250,
    borderRadius: 20,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 350,
  },
  square: {
    border: "#000 solid 200px",
    position: "fixed",
    top: -600,
    left: -100,
    height: 1000,
    width: 1000,
    background: "rgba(0,0,0,0.1)",
    transform: "rotate(120deg)",
  },
}));
export const Check = ({ title, details, nextStep, prevStep, signup }) => {
  const classes = useStyle();

  const handleNextStep = (e) => {
    e.preventDefault();
    signup(details);
    nextStep();
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className={classes.container}>
      <div className={classes.listContainer}>
        <Typography variant="h4" className={classes.header}>
          {title}
        </Typography>
        <List className={classes.list}>
          <Typography variant="h5">{details.userName}</Typography>
          <ListItem>
            <ListItemText primary={details.firstName} secondary="First Name" />
            <ListItemText primary={details.lastName} secondary="last Name" />
          </ListItem>
          <ListItem>
            <ListItemText primary={details.email} secondary="Email" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={details.country} secondary="Country" />
            <ListItemText primary={details.age} secondary="Age" />
          </ListItem>
          <div className={classes.btnContainer}>
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
        </List>
      </div>
        <div className={classes.square} />
    </div>
  );
};
