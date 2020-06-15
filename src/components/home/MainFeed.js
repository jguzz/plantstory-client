import React from 'react';
import Story from '../story/Story'
// Material UI
import Card from '@material-ui/core/Card'

function MainFeed({handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit,stories,posts,handleLike,likes}) {
  return (
    <>MainFeed
      {stories.map(story => <Card><Story handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit}  handleLike={handleLike} likes={likes} {...story} posts={posts}/></Card> )}
    </>
  );
}

export default MainFeed;
