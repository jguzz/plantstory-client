import React from "react";
import Story from "../story/Story";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
  },
  textField: {
    width: "20em",
    margin: "auto",
    minHeight: "10em",
    marginBottom: '-4em'
  },
  searchContainer: {
    height: "100%",
    textAlign: "center",
    minHeight: "100%",
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
      <Paper elevation={3} className={classes.searchContainer}>
        <Grid
          spacing={4}
          className={classes.gridContainer}
          direction="column"
          justify="space-between"
          alignContent="center"
          container
        >
          <div style={{paddingTop: '3em'}}>

          </div>
          <TextField
            onChange={handleChange}
            value={searchTerm}
            className={classes.textField}
            label="Search by Common or Latin Name!"
            name="searchTerm"
            type="text"
          />
          {stories.map((story) =>
            story.common_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            story.latin_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ? (
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
      </Paper>
    </>
  );
}

export default SearchResults;
