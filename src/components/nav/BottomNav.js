//Imports
import React from 'react';
import { Link } from 'react-router-dom';
//Material UI
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import Home from '@material-ui/icons/Home'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SearchIcon from '@material-ui/icons/Search';

function BottomNav() {
  return (
    <><BottomNavigation position="fixed" style={{bottom: 0, top: 'auto'}}>
	<BottomNavigationAction component={Link} to="/mainfeed" label="Home" value="Home" icon={<Home/>} />
  <BottomNavigationAction  component={Link} to="/search" label="Search" value="Search" icon={<SearchIcon/>}  />
	<BottomNavigationAction  component={Link} to="/create" label="Create" value="Create" icon={<AddCircleIcon/>}  />
	<BottomNavigationAction  component={Link} to="/profile" label="Profile" value="Profile" icon={<LocalFloristIcon/>}  />
  </BottomNavigation></>
  );
}

export default BottomNav;