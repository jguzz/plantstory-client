import React from "react";
import Like from "./Like";
import PostImg from "./PostImg";
// import SwipeableViews from "react-swipeable-views";
import Stepper from "./Stepper";
import Comment from './Comment'
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
import FavoriteIcon from "@material-ui/icons/Favorite";

// const BASE_URL = "https://pure-springs-07705.herokuapp.com/"
const BASE_URL = "http://localhost:3000";

function storyPosts(posts, id) {
  return posts ? posts.filter((post) => post.post.story_id === id) : [];
}
function numLikes(likes, post) {
  const num = likes.filter((like) => like.post_id === post.id);
  return num.length;
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "dark",
    maxWidth: "100%",
    minWidth: "100%",
  },
  latin: {
    paddingBottom: "2em",
  },
  img: {
    height: '300px',
  },
  like: {},
  imgDiv: {
    height: "300px",
    minWidth: "100%",
    maxWidth: '100%',
    overflow: "hidden",
    alignContent: 'center',
    textAlign: 'center'
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
  story
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
      <Grid item xs={12} s={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar/>}
            title="luxor"
            subheader={created_at}
          />
          {currentPosts[activeStep] ? (
            <div>
              <div className={classes.imgDiv}>
                <img
                  className={classes.img}
                  src={`${BASE_URL}${currentPosts[activeStep].post_img}`}
                  alt={currentPosts[activeStep].caption}
                />
              </div>
              <Stepper
                theme={theme}
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
                currentPosts={currentPosts}
              />
            </div>
          ) : null}
          <CardContent>
           {nickname?<Typography>nickname: {nickname}</Typography>:null}
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
            <Grid container>
              <Grid item xs={11}>
                {currentPosts[activeStep] ? (
                  <Typography>
                    {currentPosts[activeStep].post.caption}
                  </Typography>
                ) : null}
              </Grid>
              <Grid item xs={1}>
                {currentPosts[activeStep] ? (
                  <div className={classes.like}>
                    <FavoriteIcon
                      fontSize="large"
                      style={{ color: "#00b359" }}
                      onClick={() =>
                        handleLike(currentPosts[activeStep].post.id)
                      }
                    >
                      like
                    </FavoriteIcon>
                    <div>
                      {numLikes(likes, currentPosts[activeStep].post)} like{" "}
                    </div>
                  </div>
                ) : null}
              </Grid>
            </Grid>
            {currentPosts[activeStep] ? (
            <Comment currentUser={currentUser} postId={currentPosts[activeStep].post.id} handleChange={handleChange} comments={comments} commentPostId={commentPostId} comment={comment} deleteComment={deleteComment} handleCommentSubmit={handleCommentSubmit}/> 
            ) : null}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Story;