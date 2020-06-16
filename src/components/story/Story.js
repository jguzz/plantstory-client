import React from "react";
import Like from "./Like";
import PostImg from "./PostImg";
import SwipeableViews from "react-swipeable-views";
import Stepper from './Stepper'
//  Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
function storyPosts(posts, id) {
  // console.log(posts)
  return posts ? posts.filter((post) => post.post.story_id === id) : [];
}
function numLikes(likes, post){
  const num = likes.filter(like => like.post_id === post.id)
  console.log(num, post.id)
  return num.length
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "dark",
  },
  latin: {
    paddingBottom: "2em",
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
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
}) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const thisStoriesPosts = storyPosts(posts, id).filter((post) => post);
  const classes = useStyles();
  const theme = useTheme();
  const currentPosts = storyPosts(posts, id);
  const [activeStep, setActiveStep] = React.useState(0);
  
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
              
                post={post}
                key={id}
              />
            ) : null
          )} */}

          {currentPosts[activeStep] ? (
            <div>
              <img
               className={classes.img}
                className={classes.img}
                src={`http://localhost:3000/${currentPosts[activeStep].post_img}`}
                alt={currentPosts[activeStep].caption}
              />
              <Stepper theme={theme} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}  currentPosts={currentPosts}/>
            </div>
          ) : null}

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
            {currentPosts[activeStep] ? <Typography>{currentPosts[activeStep].post.caption}</Typography> : null}
          </CardContent>
          {/* {storyPosts(posts, id).map((post) => (
            <Like
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
          ))} */}

          {currentPosts[activeStep] ? (
            <div>
                <button onClick={() => handleLike(currentPosts[activeStep].post.id)}>like</button>
                <div>{numLikes(likes,currentPosts[activeStep].post)} like </div>
            </div>
          ) : null}
        </Card>
      </Grid>
    </>
  );
}

export default Story;
