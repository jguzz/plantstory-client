import React from "react";
import Story from "../story/Story";
import { makeStyles } from "@material-ui/core/styles";
// Material UI
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'

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

function MainFeed({
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
}) {
  const classes = useStyles();
  return (
    <>
    {/* <div className={classes.headingContainer}>
    <Typography className={classes.heading} variant='h4'>
      MainFeed
    </Typography>
    </div> */}
      <Grid className={classes.gridContainer} container>
        {stories.map((story) => (
     

          
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
          
        ))}
        
      </Grid>
    </>
  );
}

export default MainFeed;
