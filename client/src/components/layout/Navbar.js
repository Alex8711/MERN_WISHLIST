import React from "react";
import { Button, AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Button color="inherit" href="/">
            <Typography variant="h5" color="inherit">
              Wishlist
            </Typography>
          </Button>

          <Button
            color="inherit"
            className={classes.rightToolbar}
            href="/create"
          >
            New Wish
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
