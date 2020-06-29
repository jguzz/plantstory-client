import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import User from "./User";
import AllStories from "./AllStories";
import CollectionList from "../collection/CollectionList";
import Button from "@material-ui/core/Button";
function Profile({handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit, stories, collections, currentUser, currentAvatar, posts,likes, handleLike}) {


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
        <Route path="/profile/stories" render={() => <AllStories currentUser={currentUser} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit} likes={likes} handleLike={handleLike} posts={posts} stories={stories} />} />
        <Route path="/profile/collection_list" render={() => <CollectionList currentUser={currentUser} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit} likes={likes} handleLike={handleLike} collections={collections} stories={stories} posts={posts} />} />
      </Switch> </>
  );
}

export default Profile;
