import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import User from "./User";
import AllStories from "./AllStories";
import CollectionList from "../collection/CollectionList";
import Button from "@material-ui/core/Button";
function Profile({stories, collections}) {
  return (
    <>
      <User />
      <Button component={Link} to="/profile/stories">
        All Stories
      </Button>
      <Button component={Link} to="/profile/collection_list">
        Collections
      </Button>
      <Switch>
        <Route path="/profile/stories" render={() => <AllStories stories={stories} />} />
        <Route path="/profile/collection_list" render={() => <CollectionList collections={collections} />} />
      </Switch>
    </>
  );
}

export default Profile;
