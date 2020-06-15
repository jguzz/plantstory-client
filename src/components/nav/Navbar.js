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
import {  makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
// icons
import Home from '@material-ui/icons/Home'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  navbar: {
    
  }
}))

function NavBar() {
  const classes = useStyles()
  return (
    <>
      <AppBar position="static">
        <Button></Button>
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
          <Tabs>
            <Tab component={Link} to="/mainfeed" label="Home" value="Home" label={<Home/>}/>
            <Tab component={Link} to="/search" label="Search" value="Search" label={<SearchIcon/>}/>
            <Tab component={Link} to="/create" label="Create" value="Create" label={<AddCircleIcon/>}/>
            <Tab component={Link} to="/profile" label="Profile" value="Profile" label={<LocalFloristIcon/>}/>
          </Tabs>
        </Toolbar>
        
      </AppBar>
    </>
  );
}

export default NavBar;
