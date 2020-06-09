import React from 'react';
import { Link } from "react-router-dom";
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Signup() {
  return (
    <><form>
    <Typography variant="h5">Signup</Typography>
    <label>
      <TextField label="name" name="name" type="text" />
      <TextField label="email" name="email" type="text" />
      <TextField label="username" name="username" type="text" />
      <TextField label="password" name="password" type="text" />
      <TextField label="passwordConfirm" name="passwordConfirm" type="text" />
    </label>

    <input type="submit"></input>
  </form>
  <Link to="/login" >

  Have an account? Log in here!
  </Link></>
  );
}

export default Signup;
