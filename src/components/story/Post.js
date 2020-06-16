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

function Post({currentUser,handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit, post_img,post,handleLike,likes}) {
  return (
    <>
    <Card >
    <button onClick={() => handleLike(post.id)}>like</button>
    {/* <img src={`http://localhost:3000/${post_img}`} alt={post.caption} /> */}
    <p>{post.caption}</p>

    <div>{numLikes(likes,post)} like </div>
    {/* <Photo/>
    <Details/> */}
   <Comment currentUser={currentUser} postId={post.id} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit}/> 
    </Card>
    </>
  );
}

export default Post;
