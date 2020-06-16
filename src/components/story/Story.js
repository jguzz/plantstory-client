import React from "react";
import Post from "./Post";
import SwipeableViews from "react-swipeable-views";
//  Material UI
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
function storyPosts(posts, id) {
  // console.log(posts)
  return posts ? posts.filter((post) => post.post.story_id === id) : [];
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "75%",
    minWidt: "50%",
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
}) {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar></Avatar>}
            title="usename"
            subheader={created_at}
          />

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
