import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NewStory() {
  return (
    <><form>
    <Typography variant="h5">Create a Story</Typography>
    <label>
      <TextField label="nickname" name="nickname" type="text" />
      <TextField label="aqcuired on" name="aquiredOn" type="date" />
      <TextField label="common name" name="commonName" type="text" />
      <TextField label="latin name" name="latinName" type="text" />
      <TextField label="photo" name="photo" type="text" />
      <TextField label="caption" name="caption" type="text" />
    </label>

    <input type="submit"></input>
    </form>
    </>
  );
}

export default NewStory;
