import React from 'react';
import Photo from './Photo'
import Details from './Details'
import Card from '@material-ui/core/Card'
import Comment from './Comment'

function numLikes(likes, post){
  const num = likes.filter(like => like.post_id === post.id)
  console.log(num, post.id)
  return num.length
}

function Like({currentUser,handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit,post,handleLike,likes}) {
  return (
    <>
    <button onClick={() => handleLike(post.id)}>like</button>

    <div>{numLikes(likes,post)} like </div>
   <Comment currentUser={currentUser} postId={post.id} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit}/> 

    </>
  );
}

export default Like;
