// ================ Login ===================
//imports
import React from "react";
import { Link } from "react-router-dom";
// material ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Login({handleChange, handleSubmit}) {
  return (
    <>
      <form onChange={handleChange} onSubmit={(e) => handleSubmit(e)}>
        <Typography variant="h5">Login</Typography>
        <label>
          <TextField label="username" name="username" type="text" />
          <TextField label="password" name="password" type="text" />
        </label>

        <input type="submit"></input>
      </form>
      <Link to="/signup" >

      Dont have an account? Sign up here!
      </Link>
    </>
  );
}

export default Login;
