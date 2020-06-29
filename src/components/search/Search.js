import React from "react";
import Story from "../story/Story";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
  },
}));

function SearchResults({
  currentUser,
  handleChange,
  comments,
  commentPostId,
  comment,
  deleteComment,
  handleCommentSubmit,
  stories,
  posts,
  handleLike,
  likes,
  searchTerm,
}) {
  const classes = useStyles();
  return (
    <>
      <Grid
        spacing={4}
        className={classes.gridContainer}
        direction="column"
        justify="space-between"
        alignContent="center"
        container
      >
        <TextField
          onChange={handleChange}
          value={searchTerm}
          label="searchTerm"
          name="searchTerm"
          type="text"
        />
        {stories.map((story) =>
          story.common_name.includes(searchTerm) ? (
            <Story
              currentUser={currentUser}
              handleChange={handleChange}
              comments={comments}
              commentPostId={commentPostId}
              comment={comment}
              deleteComment={deleteComment}
              handleCommentSubmit={handleCommentSubmit}
              handleLike={handleLike}
              likes={likes}
              {...story}
              posts={posts}
            />
          ) : null
        )}
      </Grid>
    </>
  );
}

export default SearchResults;
