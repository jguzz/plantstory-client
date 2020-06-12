import React from 'react';
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function NewStory({ handleChange, plantNickname, acquiredOn, commonName, latinName, photo, caption, collectionID, createStorySubmit, userCollections}) {
  return (
    <><form onSubmit={createStorySubmit} onChange={handleChange}>
    <Typography variant="h5">Create a Story</Typography>
    <label>
      <TextField value={plantNickname} label="nickname" name="plantNickname" type="text" />
      <TextField value={acquiredOn} label="aqcuired on" name="aquiredOn" type="date" />
      <TextField value={commonName} label="common name" name="commonName" type="text" />
      <TextField value={latinName} label="latin name" name="latinName" type="text" />
      <label>Add a story to which collection?</label>
      <select name={"collectionID"} onChange={handleChange} >
        {userCollections.map((collection,index)=> index===0?<option selected  value={collection.id} name={collectionID}>{collection.name}</option>:<option  value={collection.id} name={collectionID}>{collection.name}</option>)}
      </select>
    </label>

    <input type="submit"></input>
    </form>
    </>
  );
}

export default NewStory;
