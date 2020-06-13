import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// Material UI
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function NewPost({photo, caption, storyId, handleChange, createPostSubmit,userStories}) {
  return (
    <>
    <form onChange={handleChange} onSubmit={createPostSubmit}>
    <Typography variant="h5">Create a Post</Typography>
      <TextField label="photo" name="photo" type="file" />
      <TextField value={caption} label="caption" name="caption" type="text" />
      <label>Add a post to which story?</label>
      <select name={"storyId"} onChange={handleChange} >
        {userStories.map(story=> <option  value={story.id} name={storyId}>{story.nickname}</option>)}
      </select>


    <input type="submit"></input>
    </form>    
      
      </>
  );
}

export default NewPost;
