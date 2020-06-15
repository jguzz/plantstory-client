//Imports
import React from "react";
import { Link } from "react-router-dom";
//Material UI
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu"
// import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'
function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Plantstory</Typography>
          {false ? (
            <Button style={{ backgroundColor: "white", marginRight: 0 }}>
              LogOut
            </Button>
          ) : (
            <Button
              component={Link}
              to="/login"
              style={{ backgroundColor: "white", marginRight: 0 }}
            >
              Login
            </Button>
          )}
          <TextField label="search" value={null} type="text"/> 
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
