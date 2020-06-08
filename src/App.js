import React from 'react';
import {Route,Switch} from 'react-router-dom'
// Components
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import NewPost from './components/create/NewPost'
import NewStory from './components/create/NewStory'
import MainFeed from './components/home/MainFeed'
import Navbar from './components/nav/Navbar'
import BottomNav from './components/nav/BottomNav'
import Profile from './components/profile/Profile'


function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route path="/login" render={() => <Login/>} />
      <Route path="/signup" render={() => <Signup/>} />
      <Route path="/newPost" render={() => <NewPost/>} />
      <Route path="/newStory" render={() => <NewStory/>} />
      <Route path="/mainfeed" render={() => <MainFeed/>}/>
      <Route path="/profile" render={() => <Profile/>}/>
    </Switch>
    <BottomNav/>
    </div>
  );
}

export default App;
