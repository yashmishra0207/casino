import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { BugReport, Close, HighlightOff, PlayArrow } from "@material-ui/icons";
import React, { useState } from "react";
import Meter from "./Meter";

const playGame = (priceSetter, save, setSlots, hack) => {
  const slot1 = hack ? 7 : 1 + Math.floor(Math.random() * 8);
  const slot2 = hack ? 7 : 1 + Math.floor(Math.random() * 8);
  const slot3 = hack ? 7 : 1 + Math.floor(Math.random() * 8);

  setSlots({ slot1, slot2, slot3 });

  let grossAmount = -1;
  if (slot1 === slot2 && slot1 === slot3) {
    if (slot1 === 7) {
      grossAmount += 10;
    } else {
      grossAmount += 5;
    }
  } else if (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
    grossAmount += 0.5;
  }

  priceSetter(grossAmount);

  save({ slot1, slot2, slot3, time: new Date().toString().slice(0, -31) });
};

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
});

const GameDialog = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [slots, setSlots] = useState({
    slot1: "*",
    slot2: "*",
    slot3: "*",
  });

  return (
    <Dialog
      // fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
    >
      <IconButton
        onClick={props.handleClose}
        color="secondary"
        className={classes.closeButton}
      >
        <HighlightOff />
      </IconButton>
      <DialogTitle className={classes.topHeading}>
        <Typography variant="h4" className={classes.topHeading}>
          {"Play and get rich"}
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
        <Meter slots={slots} className={classes.meter} />
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
          onClick={() =>
            playGame(props.priceSetter, props.save, setSlots, true)
          }
          color="primary"
          className={classes.iconButton}
        >
          <BugReport />
        </IconButton>
        <IconButton
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
