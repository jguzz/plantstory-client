import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NewPost({photo, caption, storyId, handleChange, createPostSubmit}) {
  return (
    <>
    <form onChange={handleChange} onSubmit={createPostSubmit}>
    <Typography variant="h5">Create a Post</Typography>
    <label>
      <TextField value={storyId} label="story id" name="storyId" type="text" />
      <TextField value={photo} label="photo" name="photo" type="text" />
      <TextField value={caption} label="caption" name="caption" type="text" />
    </label>

    <input type="submit"></input>
    </form></>
  );
}

export default NewPost;
