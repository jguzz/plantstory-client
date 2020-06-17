import React from 'react';
import CommentShow from './CommentShow'
// Material UI
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

function Comment({currentUser, handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit,postId}) {
  // console.log(comments)
  return (
    <>
    <form onChange={handleChange} onSubmit={(e => handleCommentSubmit(e,postId))}>
      <TextField value={comment} label='comment' name="comment" type="text"/>
      {/* <Button>Submit</Button> */}
    </form>
    {comments.map(comment=> comment.post_id === postId? <CommentShow deleteComment={deleteComment} currentUser={currentUser} key={comment.id} comment={comment}/> : null )}
    </>
  );
}

export default Comment;
