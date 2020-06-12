import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NewCollection({collectionName, collectionDescription, handleChange, createCollectionSubmit}) {
  return (
    <>
    <form onChange={handleChange} onSubmit={createCollectionSubmit}> 
      <Typography variant="h5">Create a Collection</Typography>
      <label>
        <TextField value={collectionName} label="name" name="collectionName" type="text" />
        <TextField  value={collectionDescription} label="description" name="collectionDescription" type="text" />
      </label>

      <input type="submit"></input>
    </form>
    </>
  );
}

export default NewCollection;
