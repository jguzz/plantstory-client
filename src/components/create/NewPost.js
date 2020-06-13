import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NewPost() {
  return (
    <>
    <form>
    <Typography variant="h5">Create a Post</Typography>
    <label>
      <TextField label="story id" name="storyID" type="text" />
      <TextField label="photo" name="photo" type="text" />
      <TextField label="caption" name="caption" type="text" />
    </label>

    <input type="submit"></input>
    </form></>
  );
}

export default NewPost;
