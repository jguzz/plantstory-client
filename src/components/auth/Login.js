// ================ Login ===================
//imports
import React from "react";
import { Link } from "react-router-dom";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    height: "100%",
    alignContent: "center",
    margin: "auto",
    padding: "10em",
  },
  form: {
    flexGrow: 1,
    margin: "auto",
  },
  gridItem: {
    item: true,
    xs: 12,
    marginLeft: "10%",
    marginRight: "10%",
  },
  heading: {
    color: "#33ccff",
    textAlign: "center",
    fontSize: "3em",
  },
  input: {
    margin: "auto",
    width: "100%",
    textAlign: "center",
  },
  button: {
    margin: "auto",
    width: "70%",
    color: "#33ccff",
    size: "latge",
  },
});

function Login({ handleChange, handleLoginSubmit }) {
  const classes = useStyles();
  return (
    <>
      <Card  className={classes.card}>
        <form
          className={classes.form}
          onChange={handleChange}
          onSubmit={(e) => handleLoginSubmit(e)}
        >
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <Typography variant="h5">Login</Typography>
            </Grid>
            <Grid className={classes.gridItem}>
              <TextField label="username" name="username" type="text" />
            </Grid>
            <Grid className={classes.gridItem}>
              <TextField label="password" name="password" type="text" />
            </Grid>
            <Grid className={classes.gridItem}>
              <input type="submit"></input>
            </Grid>
            <Grid className={classes.gridItem}>
              <button className={classes.buttonStyle}>click meee</button>
            </Grid>
          </Grid>
        </form>
        <Link to="/signup">Dont have an account? Sign up here!</Link>
      </Card>
    </>
  );
}

export default Login;
