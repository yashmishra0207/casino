import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { BugReport, HighlightOff, PlayArrow } from "@material-ui/icons";
import React, { useState } from "react";
import Meter from "./Meter";
import loading from "../resources/loading.svg";
import { displayMessage, playGame } from "../utils";

const useStyles = makeStyles({
  closeButton: {
    width: 48,
    height: 48,
    marginLeft: "auto",
  },
  iconButton: {
    background: "#1e90ff",
    color: "white",
    border: "1px solid transparent",
    boxShadow: "-2px 2px 4px #bbb",
    "&:hover": {
      background: "inherit",
      color: "#1e90ff",
      boxShadow: "inset -2px 2px 4px #bbb",
    },
  },
  inlineIcons: {
    position: "relative",
    top: 6,
  },
  topHeading: {
    fontFamily: "pattaya",
    paddingTop: 0,
  },
  slotContent: {
    animation: `$slider 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
  },
  "@keyframes slider": {
    "0%": {
      transform: "translateY(0)",
    },
    "45%": {
      opacity: "0",
      transform: "translateY(-100%)",
    },
    "65%": {
      opacity: "0",
      transform: "translateY(100%)",
    },
    "100%": {
      transform: "translateY(0%)",
    },
  },
  loading: {
    padding: 0,
    height: "5rem",
    margin: "-1rem 0 -2rem",
  },
});

const GameDialog = (props) => {
  const classes = useStyles();

  const [slots, setSlots] = useState({
    slot1: "*",
    slot2: "*",
    slot3: "*",
  });

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <IconButton
        onClick={props.handleClose}
        color="secondary"
        className={classes.closeButton}
      >
        <HighlightOff />
      </IconButton>
      <DialogTitle className={classes.topHeading}>
        <Typography
          id="message"
          variant="h4"
          style={{ overflow: "hidden" }}
          className={classes.topHeading + " slideIn"}
        >
          {slots.slot1 !== "$" ? (
            displayMessage(slots)
          ) : (
            <>
              <img className={classes.loading} src={loading} alt="loading" />
              <img className={classes.loading} src={loading} alt="loading" />
              <img className={classes.loading} src={loading} alt="loading" />
            </>
          )}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <li>
            Click 'Play' <PlayArrow className={classes.inlineIcons} /> to try
            your luck
          </li>
          <li>
            Click 'Hack' <BugReport className={classes.inlineIcons} /> to hack
            and get lucky
          </li>
          <li>
            Click 'Close' <HighlightOff className={classes.inlineIcons} /> to
            close the stop playing
          </li>
        </DialogContentText>
        <Meter
          slots={slots}
          className={classes.meter}
          slotContent={classes.slotContent}
        />
      </DialogContent>
      <DialogActions
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "1rem",
          width: "calc(100% - 16px)",
        }}
      >
        <IconButton
          id="hack"
          onClick={() =>
            playGame(props.priceSetter, props.save, setSlots, true)
          }
          color="primary"
          className={classes.iconButton}
        >
          <BugReport />
        </IconButton>
        <IconButton
          id="play"
          onClick={() => playGame(props.priceSetter, props.save, setSlots)}
          color="primary"
          className={classes.iconButton}
        >
          <PlayArrow />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default GameDialog;
