import React from "react";
import { Link, useHistory } from "react-router-dom";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  container: {
    flexDirection: "column",
    alignContent: "center",
    margin: "auto",
    paddingTop: '30px',
    height: '90vh',
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
    minWidth: "100vw",
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
  let history = useHistory()
  // Submits and redirects to users profile.
  function handleLoginSubmitWithRedirect(e){
    handleLoginSubmit(e)
    history.push("/profile")
  }
  const style = useStyles();
  return (
    <>
      <Container className={style.container}>
        <form
          className={style.form}
          onChange={handleChange}
          onSubmit={(e) => handleLoginSubmitWithRedirect(e)}
        >
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography className={style.login} variant="h5">
                Login
              </Typography>
            </Grid>

            <Grid item className={style.gridItem} xs={12}>
              <TextField
                className={style.textField}
                label="username"
                name="username"
                type="text"
              />
            </Grid>
            <Grid item className={style.gridItem} xs={12}>
              <TextField
                className={style.textField}
                label="password"
                name="password"
                type="text"
              />
            </Grid>

            <Grid item xs={12} className={style.signInGrid}>
              <Link to="/mainfeed">
                <Button
                  onClick={(e) => handleLoginSubmitWithRedirect(e)}
                  className={style.button}
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
