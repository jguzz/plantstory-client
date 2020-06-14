import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import User from "./User";
import AllStories from "./AllStories";
import CollectionList from "../collection/CollectionList";
import Button from "@material-ui/core/Button";
function Profile({stories, collections, currentUser, currentAvatar, posts,likes, handleLike}) {
  return (
    <>
    {currentUser?
      <User currentUser={currentUser} currentAvatar={currentAvatar} />: <p>No user is signed in!!!!!</p>
    }
      <Button component={Link} to="/profile/stories">
        All Stories
      </Button>
      <Button component={Link} to="/profile/collection_list">
        Collections
      </Button>
      <Switch>
        <Route path="/profile/stories" render={() => <AllStories likes={likes} handleLike={handleLike} posts={posts} stories={stories} />} />
        <Route path="/profile/collection_list" render={() => <CollectionList likes={likes} handleLike={handleLike} collections={collections} stories={stories} posts={posts} />} />
      </Switch> </>
  );
}

export default Profile;
