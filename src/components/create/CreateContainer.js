// ==== Create Container ====
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// components
import NewStory from "./NewStory";
import NewPost from "./NewPost";
import NewCollection from "./NewCollection";
// Material UI
import Button from "@material-ui/core/Button";

function CreateContainer({
  currentUser,
  collectionName,
  collectionDescription,
  handleChange,
  createCollectionSubmit
}) {
  return (
    <>
	{currentUser ? <>
      <Button component={Link} to="/create/collection">
        Create a Collection
      </Button>
      <Button component={Link} to="/create/story">
        Create a Story
      </Button>
      <Button component={Link} to="/create/post">
        Create a Post
	  </Button> </>
	  : 
	  <p>Please sign in to create!</p>
	  }
      <Switch>
        <Route path="/create/collection" render={() => <NewCollection collectionName={collectionName} collectionDescription={collectionDescription} handleChange={handleChange} createCollectionSubmit={createCollectionSubmit}/>} />
        <Route path="/create/story" render={() => <NewStory />} />
        <Route path="/create/post" render={() => <NewPost />} />
      </Switch>
    </>
  );
}

export default CreateContainer;
