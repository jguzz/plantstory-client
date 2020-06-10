import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NewPost from "./components/create/NewPost";
import CreateContainer from "./components/create/CreateContainer";
import MainFeed from "./components/home/MainFeed";
import Navbar from "./components/nav/Navbar";
import BottomNav from "./components/nav/BottomNav";
import Profile from "./components/profile/Profile";
import { common } from "@material-ui/core/colors";

const BASE_URL = 'http://localhost:3000'
const USER_URL = `${BASE_URL}/users`
const PLANT_URL = `${BASE_URL}/plants`
const LIKE_URL = `${BASE_URL}/likes`
const POST_URL = `${BASE_URL}/posts`
const STORY_URL = `${BASE_URL}/stories`
const COLLECTION_URL = `${BASE_URL}/collections`
const LOGIN_URL = `${BASE_URL}/login`

class App extends React.Component {
  state = {
    // ==== Seeded through the backend api ====
    users: [],
    plants: [],
    stories: [],
    collections: [],
    likes: [],
    posts: [],
    // ==== Auth ==== 
    username: '',
    password: '',
    currentUser: null,
    currentAvatar: null,
    // ==== Create ====
    // Collection
    collectionName: '',
    collectionDescription: '',
    // Story
    plantNickname: '',
    acquiredOn: null,
    commonName: '',
    latinName: '',
    collectionID: null,
    // Post
    photo: '',
    caption: '',
    storyId: null,
  }

  // ==== Fetching ====
  componentDidMount() {
    this.fetchAll()
  }
  // Post helper method
 post = (url, data) => {
     return( fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json()))
  }
  // Fetch helper method
  fetch = (url, name) => {
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({[name]: data}))
  }
  // Fetches all date from api, and seeds it to state.
  fetchAll = () => {
    this.fetch(USER_URL, 'users')
    this.fetch(PLANT_URL, 'plants')
    this.fetch(LIKE_URL, 'likes')
    this.fetch(POST_URL, 'posts')
    this.fetch(STORY_URL, 'stories')
    this.fetch(COLLECTION_URL, 'collections')
  }

  // ========== FORM ===========
  // Handle change helper method
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // Handle submit helper method
  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log('in handle submit.')

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    this.post(LOGIN_URL, user)
    .then(data => this.setCurrentUser(data))
  }

  // ==== Auth ====
  setCurrentUser = (data) => {
    this.setState({
      currentUser: data.user,
      currentAvatar: data.avatar
    })
  }

  // ==== Create ====
  createCollectionSubmit = (e) => {
    e.preventDefault()
    const {currentUser, collectionDescription, collectionName, collections} = this.state
    const newCollection = {user_id: currentUser.id, description: collectionDescription, name: collectionName}
    this.post(COLLECTION_URL, newCollection)
    .then(this.setState({collections: [...collections, newCollection]}))
  }
  createStorySubmit = (e) => {
    e.preventDefault()
    const {plantNickname, acquiredOn, commonName, latinName, collectionID,stories} = this.state 
    const newStory = {collection_id: collectionID, nickname: plantNickname, acquiredOn: acquiredOn, owned: true, common_name: commonName, latin_name: latinName}
     this.post(STORY_URL, newStory).then(story => this.setState({stories: [...stories, story]}))
  }
  createPostSubmit = (e) => {
    e.preventDefault() 
    const {storyId, caption, posts} = this.state
    const newPost = {story_id: storyId, caption: caption}
    this.post(POST_URL, newPost).then(post => this.setState({posts: [...posts, newPost]}))
  } 

// ==== Profile ====
collectionClick = (id) => {
  const showCollection = this.state.collections.find(collection => collection.id === id)
}

  render() {
    const {currentUser,currentAvatar, collectionName, collectionDescription, plantNickname, acquiredOn, commonName, latinName, photo, caption, collectionID, storyId} = this.state
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" render={() => <Login handleLoginSubmit={this.handleLoginSubmit} handleChange={this.handleChange} />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/newPost" render={() => <NewPost />} />
          <Route path="/create" render={() => <CreateContainer createPostSubmit={this.createPostSubmit} createStorySubmit={this.createStorySubmit} plantNickname={plantNickname} acquiredOn={acquiredOn} commonName={commonName} latinName={latinName} photo={photo} caption={caption} collectionID={collectionID} createCollectionSubmit={this.createCollectionSubmit} handleChange={this.handleChange} collectionName={collectionName} collectionDescription={collectionDescription} currentUser={currentUser} storyId={storyId}/>} />
          <Route path="/mainfeed" render={() => <MainFeed stories={this.state.stories}/>} />
          <Route path="/profile" render={() => <Profile stories={this.state.stories} collections={this.state.collections} currentUser={currentUser} currentAvatar={currentAvatar}/>} />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

export default App;
