import React from "react";
import { Route, Switch } from "react-router-dom";
import { DirectUpload } from "activestorage";
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

const BASE_URL = "http://localhost:3000";
const USER_URL = `${BASE_URL}/users`;
const PLANT_URL = `${BASE_URL}/plants`;
const LIKE_URL = `${BASE_URL}/likes`;
const POST_URL = `${BASE_URL}/posts`;
const STORY_URL = `${BASE_URL}/stories`;
const COLLECTION_URL = `${BASE_URL}/collections`;
const LOGIN_URL = `${BASE_URL}/login`;

class App extends React.Component {
  state = {
    // ==== Seeded through the backend api ====
    users: [],
    plants: [],
    stories: [],
    collections: [],
    likes: [],
    posts: [],
    // ==== Auth/User data ====
    username: "",
    password: "",
    currentUser: null,
    currentAvatar: null,
    userStories: [],
    userCollections: [],
    userPosts: [],
    // ==== Create ====
    // Collection
    collectionName: "",
    collectionDescription: "",
    // Story
    plantNickname: "",
    acquiredOn: '03/21/1997',
    commonName: "",
    latinName: "",
    collectionID: '',
    // Post
    photo: {},
    caption: "",
    storyId: '',
  };

  // ==== Fetching ====
  componentDidMount() {
    this.fetchAll();
  }
  // Post helper method
  post = (url, data) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  // Put helper method
  put = (url, data) => {
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json);
  };
  // Fetch helper method
  fetch = (url, name) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ [name]: data }));
  };
  // Fetches all date from api, and seeds it to state.
  fetchAll = () => {
    this.fetch(USER_URL, "users");
    this.fetch(PLANT_URL, "plants");
    this.fetch(LIKE_URL, "likes");
    this.fetch(POST_URL, "posts");
    this.fetch(STORY_URL, "stories");
    this.fetch(COLLECTION_URL, "collections");
  };

  // ========== FORM ===========
  // Handle change helper method
  handleChange = (e) => {
    e.target.name === "photo"
      ? this.setState({
          [e.target.name]: e.target.files[0],
        })
      : this.setState({
          [e.target.name]: e.target.value,
        });
  };
  // Handle submit helper method
  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("in handle submit.");

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.post(LOGIN_URL, user).then((data) => this.setCurrentUser(data));
  };

  // ==== Auth ====
  // Sets the current users info, data and avatar
  setCurrentUser = (data) => {
    this.setState(
      {
        currentUser: data.user,
        currentAvatar: data.avatar,
      },
      () => this.setUserData()
    );
  };
  // Sets users collections, stories, and posts
  setUserData = () => {
    const userCollections = this.state.collections.filter(
      (collection) => collection.user_id === this.state.currentUser.id
    );
    const userStories = userCollections.flatMap((collection) =>
      this.state.stories.filter(
        (story) => story.collection_id === collection.id
      )
    );
    const userPosts = userStories.flatMap((story) =>
      this.state.posts.filter((post) => post.post.story_id === story.id)
    );
    this.setState({
      userStories: userStories,
      userCollections: userCollections,
      userPosts: userPosts,
    });
    console.log("uc", userCollections, "us", userStories);
  };
  getStories = () => {
    const {stories, posts, collections} = this.state 
    const idk = stories.filter(story=>  posts.filter(post => post.story_id === story.id))
    console.log('idk', idk)
  }

  // ==== Create ====
  // Collection Submit
  createCollectionSubmit = (e) => {
    e.preventDefault();
    const {
      currentUser,
      collectionDescription,
      collectionName,
      collections,
      userCollections
    } = this.state;
    const newCollection = {
      user_id: currentUser.id,
      description: collectionDescription,
      name: collectionName,
    };
    this.post(COLLECTION_URL, newCollection).then(collection =>
      this.setState({ collections: [...collections, collection],userCollections:[...userCollections, collection] })
    );
  };
  // Story Submit
  createStorySubmit = (e) => {
    e.preventDefault();
    const {
      plantNickname,
      acquiredOn,
      commonName,
      latinName,
      collectionID,
      stories,
      userStories
    } = this.state;
    const newStory = {
      collection_id: collectionID,
      nickname: plantNickname,
      acquiredOn: acquiredOn,
      owned: true,
      common_name: commonName,
      latin_name: latinName,
    };
    this.post(STORY_URL, newStory).then((story) =>
      this.setState({ stories: [...stories, story],userStories: [...userStories, story] })
    );
  };
  // Post Submit
  createPostSubmit = (e) => {
    e.preventDefault();
    const { storyId, caption, posts, photo, userPosts } = this.state;
    const newPost = { story_id: storyId, caption: caption };
    this.post(POST_URL, newPost).then((data) => this.uploadFile(photo, data))
  };
  // sends file to active storage in the backend to update post with a photo
  uploadFile = (file, post) => {
    // console.log(file,post)
    const upload = new DirectUpload(
      file,
      "http://localhost:3000/rails/active_storage/direct_uploads"
    );
    upload.create((error, blob) => {
      console.log({ post_img: blob.signed_id });
      error
        ? console.log(error)
        : fetch(`${BASE_URL}/posts/${post.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ post_img: blob.signed_id }),
          })
            .then((res) => res.json())
            .then((post) =>
              this.setState({ posts: [...this.state.posts, post] })
            );
    });
  };

  // ==== Profile ====
  collectionClick = (id) => {
    const showCollection = this.state.collections.find(
      (collection) => collection.id === id
    );
  };

  // ======== Like =========
  postLike = (likeObj) => {
    fetch(LIKE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likeObj),
    })
      .then((res) => res.json())
      .then((like) => this.setState({ likes: [...this.state.likes, like] }));
  };
  //Deletes a like
  deleteLike = (id) => {
    fetch(`${LIKE_URL}/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then(res => this.setState({likes: res}));
  };
  handleLike = ( id) => {
    const {currentUser, likes} = this.state
    if (currentUser) {

      const likeObj = likes.find(
        (like) =>
          like.post_id === id && like.user_id === currentUser.id
      );
      !likeObj ?
        this.postLike({ user_id: currentUser.id, post_id: id })
        : this.deleteLike(likeObj.id)
    } else {
      console.log('Oh no, you cant like if youre not signed in!')
    }
  }
  render() {
    const {
      currentUser,
      currentAvatar,
      collectionName,
      collectionDescription,
      plantNickname,
      acquiredOn,
      commonName,
      latinName,
      photo,
      caption,
      collectionID,
      storyId,
      userCollections,
      userPosts,
      userStories,
      posts,
      likes,
    } = this.state;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                handleLoginSubmit={this.handleLoginSubmit}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/newPost" render={() => <NewPost />} />
          <Route
            path="/create"
            render={() => (
              <CreateContainer
                createPostSubmit={this.createPostSubmit}
                createStorySubmit={this.createStorySubmit}
                plantNickname={plantNickname}
                acquiredOn={acquiredOn}
                commonName={commonName}
                latinName={latinName}
                photo={photo}
                caption={caption}
                collectionID={collectionID}
                createCollectionSubmit={this.createCollectionSubmit}
                handleChange={this.handleChange}
                collectionName={collectionName}
                collectionDescription={collectionDescription}
                currentUser={currentUser}
                storyId={storyId}
                userCollections= {userCollections}
                userPosts= {userPosts}
                userStories={userStories}
              />
            )}
          />
          <Route
            path="/mainfeed"
            render={() => <MainFeed likes={likes} handleLike={this.handleLike} posts={posts} stories={this.state.stories} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={userPosts}
                stories={userStories}
                collections={userCollections}
                currentUser={currentUser}
                currentAvatar={currentAvatar}
                likes={likes} handleLike={this.handleLike}
              />
            )}
          />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

export default App;
