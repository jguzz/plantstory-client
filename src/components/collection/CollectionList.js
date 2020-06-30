import React from "react";
import CollectionShow from "./CollectionShow";
import { Route, Switch, Link } from "react-router-dom";
import Collection from "./Collection";

// Material UI
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function CollectionList({
  currentUser,
  handleChange,
  comments,
  commentPostId,
  comment,
  deleteComment,
  handleCommentSubmit,
  collections,
  stories,
  posts,
  likes,
  handleLike,
}) {
  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'center', color: '#00b359'}} >Collections</Typography>

      <Switch>
        <Route
          exact
          path={`/profile/collection_list/:id`}
          render={(collection) => (
            <CollectionShow
              currentUser={currentUser}
              handleChange={handleChange}
              comments={comments}
              commentPostId={commentPostId}
              comment={comment}
              deleteComment={deleteComment}
              handleCommentSubmit={handleCommentSubmit}
              likes={likes}
              handleLike={handleLike}
              stories={stories}
              posts={posts}
              {...collection}
            />
          )}
        />
        <Route
          exact
          path="/profile/collection_list"
          render={() => (
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="baseline"
            >
              {collections.map((collection) => (
                <Collection
                  likes={likes}
                  key={collection.id}
                  {...collection}
                  posts={posts}
                  stories={stories}
                />
              ))}
            </Grid>
          )}
        />
      </Switch>
    </>
  );
}

export default CollectionList;
