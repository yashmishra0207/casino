import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem auto",
    width: "15rem",
  },
  slot: {
    fontSize: "4rem",
    fontFamily: "pattaya",
    padding: "1rem",
    border: "5px double",
  },
});

const Meter = ({ slots }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div id="slot1" className={classes.slot}>
        {slots.slot1}
      </div>
      <div id="slot2" className={classes.slot}>
        {slots.slot2}
      </div>
      <div id="slot3" className={classes.slot}>
        {slots.slot3}
      </div>
    </div>
  );
};

export default Meter;
