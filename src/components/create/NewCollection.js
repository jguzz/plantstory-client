import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NewCollection() {
  return (
    <>
    <form>
    <Typography variant="h5">Create a Collection</Typography>
    <label>
      <TextField label="name" name="name" type="text" />
      <TextField label="description" name="description" type="text" />
    </label>

    <input type="submit"></input>
    </form></>
  );
}

export default NewCollection;
