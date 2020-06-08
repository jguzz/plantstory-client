import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {" "}
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
		  <Typography variant="h6" >
            Plantstory
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
