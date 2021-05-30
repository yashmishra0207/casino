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
    background: "linear-gradient(#1e90ff, #ff69b4)",
    color: "white",
    overflow: "hidden",
    textAlign: "center",
    width: "4.5rem",
  },
});

const Meter = ({ slots, slotContent }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div id="slot1" className={classes.slot}>
        <div className={slots.slot1 === "$" && slotContent}>{slots.slot1}</div>
      </div>
      <div
        id="slot2"
        className={classes.slot}
        style={{ borderLeft: 0, borderRight: 0 }}
      >
        <div
          style={{ animationDelay: "0.05s" }}
          className={slots.slot1 === "$" && slotContent}
        >
          {slots.slot2}
        </div>
      </div>
      <div id="slot3" className={classes.slot}>
        <div
          style={{ animationDelay: "0.1s" }}
          className={slots.slot1 === "$" && slotContent}
        >
          {slots.slot3}
        </div>
      </div>
    </div>
  );
};

export default Meter;
