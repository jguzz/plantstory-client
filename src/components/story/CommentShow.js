import React from 'react';


function CommentShow({comment,currentUser,deleteComment}) {
  return (
    <>
    {currentUser && currentUser.id === comment.user_id ? <button onClick={() => deleteComment(comment.id)}>delete</button>: null}
      <p>{comment.text}</p>
    </>
  );
}

export default CommentShow;
