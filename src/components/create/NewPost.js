import React, {useCallback} from "react";
import {useDropzone} from 'react-dropzone'
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";



const useStyles = makeStyles((theme) => ({
  form: {
    flexGrow: 1,
    minHeight: "30em",
    margin: "auto",
  },
  gridItem: {
    item: true,
    marginLeft: "10%",
    marginRight: "10%",
  },
  input: {
    margin: "auto",
    width: "100%",
    textAlign: "center",
  },
  button: {
    margin: "auto",
    width: "70%",
    backgroundColor: "#00b359",
    color: "white",
  },
  login: {
    color: "#00b359",
    textAlign: "center",
    fontSize: "3em",
  },
  textField: {
    margin: "auto",
    width: "100%",
    textAlign: "center",
  },
  signInGrid: {
    marginLeft: "15%",
    marginRight: "15%",
    textAlign: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function NewPost({
  photo,
  caption,
  storyId,
  handleChange,
  createPostSubmit,
  userStories,
}) {
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  const classes = useStyles();
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    handleChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <>
      <Container
        style={{
          flexDirection: "column",
          alignContent: "center",
          margin: "auto",
          padding: "10em",
        }}
      >
        <form
          className={classes.form}
          onChange={handleChange}
          onSubmit={createPostSubmit}
        >
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography className={classes.login} variant="h5">
                Create a Post
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                label="photo"
                name="photo"
                type="file"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                value={caption}
                label="caption"
                name="caption"
                type="text"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Story</InputLabel>
                <Select name={"storyId"} onChange={handleChange}>
                  {userStories.map((story) => (
                    <MenuItem value={story.id} name={storyId}>
                      {story.nickname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
            <Grid item xs={12} className={classes.signInGrid}>
              <Button type="submit">Create Post</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default NewPost;
