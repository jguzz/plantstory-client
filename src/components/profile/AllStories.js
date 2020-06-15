import React from 'react';
import Story from '../story/Story'

function AllStories({handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit, stories, posts , likes, handleLike}) {
  console.log(posts)
  return (
     <> <h3>All Stories</h3>
  {stories.map( (story,index) =><Story handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit} likes={likes} handleLike={handleLike} key={index} posts={posts}{...story}/>)}
  </>
  );
}

export default AllStories;
