import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { DirectUpload } from "activestorage";
// ==== Components ====
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NewPost from "./components/create/NewPost";
import CreateContainer from "./components/create/CreateContainer";
import MainFeed from "./components/home/MainFeed";
import Navbar from "./components/nav/Navbar";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import Welcome from "./components/home/Welcome"
// ==== Material UI ====
// import { common } from "@material-ui/core/colors";
// import { createMuiTheme } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'

// Fetch URLS  
const BASE_URL = "https://pure-springs-07705.herokuapp.com/";
const USER_URL = `${BASE_URL}/users`;
const PLANT_URL = `${BASE_URL}/plants`;
const LIKE_URL = `${BASE_URL}/likes`;
const POST_URL = `${BASE_URL}/posts`;
const STORY_URL = `${BASE_URL}/stories`;
const COLLECTION_URL = `${BASE_URL}/collections`;
const LOGIN_URL = `${BASE_URL}/login`;
const COMMENT_URL = `${BASE_URL}/comments`

class App extends React.Component {
  state = {
    // ==== Seeded through the backend api ====
    users: [],
    plants: [],
    stories: [],
    collections: [],
    likes: [],
    posts: [],
    comments: [],
    // ==== Auth/User data ====
    username: "",
    password: "",
    currentUser: {},
    currentAvatar: null,
    userStories: [],
    userCollections: [],
    userPosts: [],
    // sign up
    name: '',
    email: '',
    passwordConfirm: '',

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
    // Comment
    commentPostId: null,
    comment: '',
    // Search
    searchTerm: '',
    //Stepper
    activeStep: 0,
  };

  
  // ==== Fetching Methods ====
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
  // Delete helper method
  delete =(url, id) => {
    return fetch(`${url}/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(id),
    })
    .then((res) => res.json())
  }
  // Fetches all date from api, and seeds it to state.
  fetchAll = () => {
    this.fetch(USER_URL, "users");
    this.fetch(PLANT_URL, "plants");
    this.fetch(LIKE_URL, "likes");
    this.fetch(POST_URL, "posts");
    this.fetch(STORY_URL, "stories");
    this.fetch(COLLECTION_URL, "collections");
    this.fetch(COMMENT_URL, "comments")
  };
  
  
  // ========== FORM ===========
  // Handle change helper method
  handleChange = (e) => {
    // Checks if the event is for photo uploads
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
  };
    // Sets sign up form to state.currentUser
    handleSignUp = (e) => {
      e.preventDefault();
      if (this.state.password === this.state.validatePassword) {
        this.setState(
          {
            currentUser: {
              username: this.state.username,
              password: this.state.password,
              age: this.state.age,
              img: this.state.img,
              name: this.state.name,
              loggedIn: true,
            },
          },
          () => this.postUser(this.state.currentUser)
        );
      } else {
        alert("Passwords do not match :(");
      }
    };

    
  getStories = () => {
    // const {stories, posts, collections} = this.state 
    // const idk = stories.filter(story=>  posts.filter(post => post.story_id === story.id))
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
    this.post(POST_URL, newPost).then((data) => this.uploadFile(photo, data)).then(console.log9)
  };
  // sends file to active storage in the backend to update post with a photo
  uploadFile = (file, post) => {
    // console.log(file,post)
    const upload = new DirectUpload(
      file,
      "http://localhost:3000/rails/active_storage/direct_uploads"
    );
    upload.create((error, blob) => {
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
            .then((posts) =>
              this.setState({ posts: posts, userPosts: posts})
            );
    });
  };

  // =================== Profile ===========================
  collectionClick = (id) => {
    const showCollection = this.state.collections.find(
      (collection) => collection.id === id
    );
  };

  // ===================== Like =============================
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
    this.delete(LIKE_URL, id)
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
  // ========================== Comment ==================================
  handleCommentSubmit = (e,postId) => {
    e.preventDefault()
    const {commentPostId, comment, currentUser,comments} = this.state
    const postObj={post_id: postId, user_id: currentUser.id, text: comment  }
    this.post(COMMENT_URL, postObj).then(comment => this.setState({comments: [...comments, comment]}))
  }
  deleteComment = ( id) => {
    this.delete(COMMENT_URL, id)
    .then(comments=> this.setState({comments: comments}))
  }
  // =================== Stepper ===================================
  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    })
  }
  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    })
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
      comments,
      commentPostId,
      comment,
      searchTerm,
      activeStep
    } = this.state;
    return (
      <Paper>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <>    
                <Navbar handleSearchChange={this.handleSearchChange} />
                <Login
                  handleLoginSubmit={this.handleLoginSubmit}
                  handleChange={this.handleChange}
                  />
              </>
            )}
          />
          <Route path="/signup" render={() => <><Navbar handleSearchChange={this.handleSearchChange} /><Signup handleChange={this.handleChange} /></>} />
          <Route path="/newPost" render={() => <><Navbar handleSearchChange={this.handleSearchChange} /><NewPost /></>} />
          <Route
            path="/create"
            render={() => (
              <>
              <Navbar handleSearchChange={this.handleSearchChange} />
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
              </>
            )}
          />
          <Route
            path="/mainfeed"
            render={() => <> <Navbar handleSearchChange={this.handleSearchChange} /> <MainFeed handleNext={this.handleNext} handleBack={this.handleBack} activeStep={activeStep} currentUser={currentUser}   handleChange={this.handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={this.deleteComment} handleCommentSubmit={this.handleCommentSubmit} likes={likes} handleLike={this.handleLike} posts={posts} stories={this.state.stories} /></>}
          />
          <Route
            path="/profile"
            render={() => (
              <>
              <Navbar handleSearchChange={this.handleSearchChange} />
              <Profile
              comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={this.deleteComment} handleCommentSubmit={this.handleCommentSubmit} handleChange={this.handleChange}
                posts={userPosts}
                stories={userStories}
                collections={userCollections}
                currentUser={currentUser}
                currentAvatar={currentAvatar}
                likes={likes} handleLike={this.handleLike}
              />
              </>
            )}
          />
          <Route path="/search"
          render={() => (
            <>
            <Navbar handleSearchChange={this.handleSearchChange} />
            <Search currentUser={currentUser}   handleChange={this.handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={this.deleteComment} handleCommentSubmit={this.handleCommentSubmit} likes={likes} handleLike={this.handleLike} posts={posts} stories={this.state.stories} searchTerm={searchTerm} handleChange={this.handleChange}/>
            </>
          )} />
          <Route path="/"
          render={() => (
            <Welcome/>
          )}/>
        </Switch>
      
        {/* <BottomNav  /> */}
      </Paper>
    );
  }
}

export default App;