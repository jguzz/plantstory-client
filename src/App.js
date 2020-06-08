import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NewPost from "./components/create/NewPost";
import NewStory from "./components/create/NewStory";
import MainFeed from "./components/home/MainFeed";
import Navbar from "./components/nav/Navbar";
import BottomNav from "./components/nav/BottomNav";
import Profile from "./components/profile/Profile";

const BASE_URL = 'http://localhost:3000'
const USER_URL = `${BASE_URL}/users`
const PLANT_URL = `${BASE_URL}/plants`
const LIKE_URL = `${BASE_URL}/likes`
const POST_URL = `${BASE_URL}/posts`
const STORY_URL = `${BASE_URL}/stories`

class App extends React.Component {
  state = {
    users: [],
    plants: []
  }
  //Fetching
  componentDidMount() {
    this.fetchAll()
  }
  fetch = (url, name) => {
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({[name]: data}))
  }
  fetchAll = () => {
    this.fetch(USER_URL, 'users')
    this.fetch(PLANT_URL, 'plants')
    this.fetch(LIKE_URL, 'likes')
    this.fetch(POST_URL, 'posts')
    this.fetch(STORY_URL, 'stories')
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/newPost" render={() => <NewPost />} />
          <Route path="/newStory" render={() => <NewStory />} />
          <Route path="/mainfeed" render={() => <MainFeed />} />
          <Route path="/profile" render={() => <Profile />} />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

export default App;
