import React from 'react';
import Collection from './Collection'
import CollectionShow from './CollectionShow'
import { Route, Switch, Link } from "react-router-dom";

function CollectionList({currentUser, handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit,collections, stories,posts, likes, handleLike}) {
  return (
    <>
    <h3>All Collections</h3>
    
    <Switch>
      <Route exact path={`/profile/collection_list/:id`} render={(collection) => <CollectionShow currentUser={currentUser} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit}  likes={likes}  handleLike={handleLike} stories={stories}posts={posts} {...collection} />}/>
      <Route exact path="/profile/collection_list" render={() => collections.map(collection => <Collection likes={likes} key={collection.id} {...collection} posts={posts} stories={stories}/> )}/>
    </Switch>
    </>
  );
}

export default CollectionList;
