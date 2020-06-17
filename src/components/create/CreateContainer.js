// ==== Create Container ====
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// components
import NewStory from "./NewStory";
import NewPost from "./NewPost";
import NewCollection from "./NewCollection";
// Material UI
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function CreateContainer({
  currentUser,
  collectionName,
  collectionDescription,
  handleChange,
  createCollectionSubmit,
  plantNickname,
  acquiredOn,
  commonName,
  latinName,
  photo,
  caption,
  collectionID,
  createStorySubmit,
  storyId,
  createPostSubmit,
  userStories,
  userCollections,
  userPosts,
}) {
  return (
    <>
      {true ? (
        <div style={{ width: "100%" }}>
          <Toolbar>
            <Tabs
              style={{ flexGrow: 1 }}
              flexGrow
              variant="fullWidth"
              indicatorColor="primary"
              textColor="light"
              centered
            >
              <Tab
                label="Create a Collection"
                component={Link}
                to="/create/collection"
              />
              <Tab label="Create a Story" component={Link} to="/create/story" />
              <Tab label="Create a Post" component={Link} to="/create/post" />
            </Tabs>
          </Toolbar>
        </div>
      ) : (
        <p>Please sign in to create!</p>
      )}
      <Switch>
        <Route
          path="/create/collection"
          render={() => (
            <NewCollection
              collectionName={collectionName}
              collectionDescription={collectionDescription}
              handleChange={handleChange}
              createCollectionSubmit={createCollectionSubmit}
            />
          )}
        />
        <Route
          path="/create/story"
          render={() => (
            <NewStory
              userCollections={userCollections}
              createStorySubmit={createStorySubmit}
              handleChange={handleChange}
              plantNickname={plantNickname}
              acquiredOn={acquiredOn}
              commonName={commonName}
              latinName={latinName}
              collectionID={collectionID}
            />
          )}
        />
        <Route
          path="/create/post"
          render={() => (
            <NewPost
              userStories={userStories}
              createPostSubmit={createPostSubmit}
              photo={photo}
              caption={caption}
              storyId={storyId}
              handleChange={handleChange}
            />
          )}
        />
      </Switch>
    </>
  );
}

export default CreateContainer;
