import React from "react";
import Collection from "./Collection";
import Story from "../story/Story.js";
import Post from "../story/Like.js";
import { Route, Switch, Link, useParams } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
  },
}));

function CollectionShow(props) {
  let { id } = useParams();
  const { name, description, posts, stories, likes } = props.location.state;
  const {
    currentUser,
    handleChange,
    comments,
    commentPostId,
    comment,
    deleteComment,
    handleCommentSubmit,
  } = props;
  const classes = useStyles();
  return (
    <>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
      <Grid
        spacing={4}
        className={classes.gridContainer}
        direction="column"
        justify="space-between"
        alignContent="center"
        container
      >
        {props.stories.map((story) =>
          story.collection_id === parseInt(id) ? (
            <Story
              currentUser={currentUser}
              handleChange={handleChange}
              comments={comments}
              commentPostId={commentPostId}
              comment={comment}
              deleteComment={deleteComment}
              handleCommentSubmit={handleCommentSubmit}
              handleLike={props.handleLike}
              key={story.id}
              likes={props.likes}
              handleLike={props.handleLike}
              {...story}
              posts={props.posts}
            />
          ) : (
            console.log("id doesnt match", story.collection_id, id)
          )
        )}
      </Grid>
    </>
  );
}

export default CollectionShow;
