import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core";
import { Casino, PowerSettingsNew } from "@material-ui/icons";
import React from "react";
import CustomDialog from "./CustomDialog";

const useStyles = makeStyles((theme) => ({
  companyName: {
    fontFamily: "pattaya",
    color: "#fff",
    marginRight: "1rem",
  },
  icon: {
    color: "#fff",
    shadow: "white",
  },
  login: {
    color: "inherit",
    backgroundColor: "#ffffff23",
    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.primary.main,
    },
  },
  logoIcon: {
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    marginRight: "1rem",
  },
  logo: {
    alignItems: "center",
    display: "flex",
    marginRight: "auto",
    userSelect: "none",
  },
  userAvatar: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    border: "1px solid white",
    fontFamily: "pattaya",
    marginRight: "1rem",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = (name) => {
    props.setter({
      ...props.values,
      name,
    });
    handleClose();
  };

  const handleLogout = () => {
    props.setter({
      ...props.values,
      name: "",
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.logo}>
          <Avatar className={classes.logoIcon}>
            <Casino />
          </Avatar>
          <Typography variant="h5" className={classes.companyName}>
            Kasino
          </Typography>
        </div>
        <Typography variant="h6" className={classes.companyName}>
          $ <b>{props.values.amount.toFixed(2)}</b>
        </Typography>
        {props.values.name.trim() !== "" ? (
          <>
            <Tooltip
              TransitionComponent={Zoom}
              title={props.values.name.trim()}
              arrow
            >
              <Avatar className={classes.userAvatar}>
                {props.values.name.trim().slice(0, 1)}
              </Avatar>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Logout" arrow>
              <IconButton
                size="small"
                className={classes.login}
                onClick={handleLogout}
              >
                <PowerSettingsNew />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Button className={classes.login} onClick={handleClickOpen}>
              Login
            </Button>
          </>
        )}
      </Toolbar>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        setter={handleLogin}
      />
    </AppBar>
  );
};

export default Header;
