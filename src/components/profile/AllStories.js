import React from "react";
import Story from "../story/Story";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: 'auto',
  },
  headingContainer: {
    alignContent: 'center',
    height: '7.45em',
  },
  gridContainer: {
    width: '100%'
  }
}))

function AllStories({
  currentUser,
  handleChange,
  comments,
  commentPostId,
  comment,
  deleteComment,
  handleCommentSubmit,
  stories,
  posts,
  likes,
  handleLike,
}) {
  const classes = useStyles();
  return (
    <>
      <Grid spacing={4} className={classes.gridContainer}direction="column" justify="space-between"  alignContent="center" container>
      {stories.map((story, index) => (
        <Story
          currentUser={currentUser}
          handleChange={handleChange}
          comments={comments}
          commentPostId={commentPostId}
          comment={comment}
          deleteComment={deleteComment}
          handleCommentSubmit={handleCommentSubmit}
          likes={likes}
          handleLike={handleLike}
          key={index}
          posts={posts}
          {...story}
        />
      ))}
      </Grid>
    </>
  );
}

export default AllStories;
