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
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// icons
import Home from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '7.45em',
  },
  toolbar: {
    flexGrow: 1,
    alignContent: "center",
    textAlign: "center",
  },
  tabs: {
    flexGrow: 1,
  },
  login: {
    background: "clear",
    color: "white",
  },
  logo: {
    textDecoration: 'none',
    margin: "auto",
    color: "white",
  },
  logoGrid: {
    textAlign: 'center'
  },
  user: {
    textAlign: 'right'
  },
  appBar: {
    backgroundColor: '#00b359'
  },
  logoImg: {
    borderRadius: "50%",
    width: '150px',
    height: 'auto',
  }
}));

function NavBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}/>
        <AppBar className={classes.appBar} position={"fixed"}>
          <Toolbar className={null}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={4}></Grid>
              <Grid item xs={4} className={classes.logoGrid}>
                {/* <img className={classes.logoImg} src={`http://localhost:3000/Plantstory.png`} alt="plantstory logo... a plant growing in a pink gem pot." /> */}
                <Typography component={Link} to="/" className={classes.logo} variant="h4">
                  Plantstory
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.user}>                                                                                
                {false ? (
                  <Button style={{ backgroundColor: "white", marginRight: 0 }}>
                    LogOut
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to="/login"
                    className={classes.login}
                  >
                    Login
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>

          <Toolbar>
            <Tabs
              className={classes.tabs}
              flexGrow
              variant="fullWidth"
              indicatorColor="primary"
              textColor="light"
              centered
            >
              <Tab
                component={Link}
                to="/mainfeed"
                label="Home"
                value="Home"
                label={<Home />}
              />
              <Tab
                component={Link}
                to="/search"
                label="Search"
                value="Search"
                label={<SearchIcon />}
              />
              <Tab
                component={Link}
                to="/create"
                label="Create"
                value="Create"
                label={<AddCircleIcon />}
              />
              <Tab
                component={Link}
                to="/profile"
                label="Profile"
                value="Profile"
                label={<LocalFloristIcon />}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
  
    </>
  );
}

export default NavBar;
