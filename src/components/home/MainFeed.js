
import React from "react";
import Story from "../story/Story";
import { makeStyles } from "@material-ui/core/styles";
// Material UI
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: '100%',
    paddingTop: '30px'
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
  likes, handleNext, handleBack, activeStep
}) {
  const classes = useStyles();
  return (
    <>
    {/* <div className={classes.headingContainer}>
    <Typography className={classes.heading} variant='h4'>
      MainFeed
    </Typography>
    </div> */}
      <Grid spacing={4} className={classes.gridContainer}direction="column" justify="space-between"  alignContent="center" container>
        {stories.map((story) => (
            <Story story={story} handleNext={handleNext} handleBack={handleBack} activeStep={activeStep}
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
