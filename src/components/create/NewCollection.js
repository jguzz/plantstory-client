import React from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
  container: {
    minWidth: '100vw'
  },
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
});

function NewCollection({
  collectionName,
  collectionDescription,
  handleChange,
  createCollectionSubmit,
}) {
  const classes = useStyles();
  return (
    <>
      <Container
        className={classes.container}
        style={{
          flexDirection: "column",
          alignContent: "center",
          margin: "auto",
        }}
      >
        <form
          className={classes.form}
          onChange={handleChange}
          onSubmit={createCollectionSubmit}
        >
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography className={classes.login} variant="h5">
                Create a Collection
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                value={collectionName}
                label="name"
                name="collectionName"
                type="text"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                value={collectionDescription}
                label="description"
                name="collectionDescription"
                type="text"
              />
            </Grid>
            <Grid container>
            <Grid
              item
              style={{
                textAlign: "center",
                margin: "auto",
                marginTop: "2em",
              }}
            >
            <Button type="submit">Submit</Button>
            </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>

  );
}

export default NewCollection;
