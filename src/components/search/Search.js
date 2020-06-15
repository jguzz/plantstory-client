import React from 'react';
import Story from '../story/Story'
// material ui
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card'
function SearchResults({currentUser, handleChange, comments, commentPostId, comment, deleteComment, handleCommentSubmit,stories,posts,handleLike,likes, searchTerm}) {
  return (
    <>       
   <TextField onChange={handleChange} value={searchTerm} label="searchTerm" name="searchTerm" type="text" />
   {stories.map(story => story.common_name.includes(searchTerm)? <Card><Story currentUser={currentUser} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit}  handleLike={handleLike} likes={likes} {...story} posts={posts}/></Card> : null )}
    </>
  );
}

export default SearchResults;