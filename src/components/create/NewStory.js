import React from "react";
import CollectionList from "../collection/CollectionList";
// material ui
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

function NewStory({
  handleChange,
  plantNickname,
  acquiredOn,
  commonName,
  latinName,
  photo,
  caption,
  collectionID,
  createStorySubmit,
  userCollections,
}) {
  const classes = useStyles();
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
          onSubmit={createStorySubmit}
          onChange={handleChange}
        >
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography className={classes.login} variant="h5">
                Create a Story
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                value={plantNickname}
                label="nickname"
                name="plantNickname"
                type="text"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                value={acquiredOn}
                label="Acquired On"
                type="date"
                name="acquiredOn"
                defaultValue="2020-03-21"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                value={commonName}
                label="common name"
                name="commonName"
                type="text"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                value={latinName}
                label="latin name"
                name="latinName"
                type="text"
              />
            </Grid>

            <Grid item className={classes.gridItem} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Collection</InputLabel>

                <Select name={"collectionID"} onChange={handleChange}>
                  {userCollections.map((collection) => (
                    <MenuItem value={collection.id} name={collectionID}>
                      {collection.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <select name={"collectionID"} onChange={handleChange}></select> */}
              <Grid item xs={12} className={classes.signInGrid}>
                <Button type="submit">Create Story</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default NewStory;
