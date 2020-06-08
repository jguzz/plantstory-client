import React from "react";
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Login() {
  return (
    <>
      <form>
        <Typography variant="h5">Login</Typography>
        <label>
          <TextField label="username" name="username" type="text" />
          <TextField label="password" name="password" type="text" />
        </label>

        <input type="submit"></input>
      </form>
    </>
  );
}

export default Login;
