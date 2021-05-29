import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const CustomDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      transitionDuration={0}
    >
      <DialogTitle id="form-dialog-title">
        {props.loggingOut ? "Logout" : "Login"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.loggingOut
            ? "Are you sure you want to logout? All your game progress will be lost."
            : "Please enter your name. This will be displayed in your Avatar."}
        </DialogContentText>
        {!props.loggingOut && (
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.setter(
              props.loggingOut ? "" : document.getElementById("name").value
            );
          }}
          color="primary"
        >
          {props.loggingOut ? "Confirm" : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
