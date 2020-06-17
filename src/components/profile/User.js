import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
function User({ currentUser, currentAvatar, stories, posts }) {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <img
              style={{ margin: "auto", borderRadius: "100%" }}
              src={`http://localhost:3000/${currentAvatar}`}
              alt="The current users profile pic"
            />
          </Grid>
          <Grid style={{ textAlign: "center" }} item xs={12}>
            <Typography>{currentUser.username}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography>{stories.length}</Typography>
                <br />
                <Typography>Stories</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{posts.length}</Typography>
                <br />
                <Typography>Posts</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default User;
