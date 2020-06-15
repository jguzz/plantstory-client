import React from "react";
import Post from "./Post";
import SwipeableViews from 'react-swipeable-views';
//  Material UI
import CardContent from "@material-ui/core/CardContent";
function storyPosts(posts, id ) {
  // console.log(posts)
  return posts? 
  posts.filter((post) => post.post.story_id === id):  []
}

function Story({
  handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit,
  acquiredOn,
  collection_id,
  created_at,
  id,
  nickname,
  owned,
  common_name,
  latin_name,
  posts,
  handleLike,
  likes,
}) {
  console.log(posts)
  return (
    <>
      <CardContent>
        <p>nickname: {nickname}</p>
        <p>Common Name: {common_name}</p>
        <p>Latin Name: {latin_name}</p>
        <p>Acquired on: {acquiredOn}</p>
        {storyPosts(posts, id).map(post => <Post handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit} likes={likes} handleLike={handleLike} key={post.post.id} {...post}/>)}
      </CardContent>
    </>
  );
}

export default Story;
