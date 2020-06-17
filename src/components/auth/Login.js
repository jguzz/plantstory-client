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
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
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

function Login({ handleChange, handleLoginSubmit }) {
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
          onChange={handleChange}
          onSubmit={(e) => handleLoginSubmit(e)}
        >
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography className={classes.login} variant="h5">
                Login
              </Typography>
            </Grid>

            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                label="username"
                name="username"
                type="text"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                className={classes.textField}
                label="password"
                name="password"
                type="text"
              />
            </Grid>

            <Grid item xs={12} className={classes.signInGrid}>
              <Link to="/mainfeed">
                <Button
                  component={Link}
                  to="/mainfeed"
                  onClick={(e) => handleLoginSubmit(e)}
                  className={classes.button}
                  size="large"
                  Submit
                >
                  <Typography>Enter</Typography>
                </Button>
              </Link>
            </Grid>
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
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Login;
