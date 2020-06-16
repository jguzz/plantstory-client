import React from "react";
import Post from "./Post";
import PostImg from "./PostImg";
import SwipeableViews from "react-swipeable-views";
//  Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from '@material-ui/core/MobileStepper'
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
function storyPosts(posts, id) {
  // console.log(posts)
  return posts ? posts.filter((post) => post.post.story_id === id) : [];
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "dark",
  },
  latin: {
    paddingBottom: "2em",
  },
}));

function Story({
  handleChange,
  comments,
  commentPostId,
  comment,
  deleteComment,
  handleCommentSubmit,
  acquiredOn,
  collection_id,
  created_at,
  id,
  nickname,
  owned,
  common_name,
  latin_name,
  posts,
  handleLike,
  likes,
  currentUser,
  handleNext,
  handleBack,
  activeStep,
}) {
  const thisStoriesPosts = storyPosts(posts, id).filter((post) =>
    post 
  );
  const classes = useStyles();
  const theme = useTheme()
  const currentPosts = storyPosts(posts, id)
  return (
    <>
    
      <Grid item xs={8}>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar></Avatar>}
            title="usename"
            subheader={created_at}
          />
          {/* {storyPosts(posts, id).map((post) =>
            post.post_img ? (
              <PostImg
                handleNext={handleNext}
                handleBack={handleBack}
                activeStep
                post={post}
                key={id}
              />
            ) : null
          )} */}



{currentPosts[activeStep]?
<div>

           <MobileStepper
        steps={storyPosts(posts,id).length}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === storyPosts(posts,id).length - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }/>
<img
        className={classes.img}
        src={`http://localhost:3000/${currentPosts[activeStep].post_img}`}
        alt={currentPosts[activeStep].caption}
        /></div>
        : null }


          <CardContent>
            <Typography>nickname: {nickname}</Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6">{common_name}</Typography>
                <Typography classes={classes.latin} color="textSecondary">
                  {latin_name}
                </Typography>
              </Grid>
              <Typography>Acquired on: {acquiredOn}</Typography>
            </Grid>
          </CardContent>
          {storyPosts(posts, id).map((post) => (
            <Post
              currentUser={currentUser}
              handleChange={handleChange}
              comments={comments}
              commentPostId={commentPostId}
              comment={comment}
              deleteComment={deleteComment}
              handleCommentSubmit={handleCommentSubmit}
              likes={likes}
              handleLike={handleLike}
              key={post.post.id}
              {...post}
            />
          ))}
        </Card>
      </Grid>
    </>
  );
}

export default Story;
