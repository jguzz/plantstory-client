import React from "react";
import Post from "./Post";
import SwipeableViews from 'react-swipeable-views';
//  Material UI
import CardContent from "@material-ui/core/CardContent";
function storyPosts(posts, id ) {
  console.log(posts)
  return posts? 
  posts.map(obj=> obj.filter(post => console.log(post))):  []
}

function UserStory({
  acquiredOn,
  collection_id,
  created_at,
  id,
  nickname,
  owned,
  common_name,
  latin_name,
  posts,
}) {
  console.log(posts)
  return (
    <>
      <CardContent>
        <p>nickname: {nickname}</p>
        <p>Common Name: {common_name}</p>
        <p>Latin Name: {latin_name}</p>
        <p>Acquired on: {acquiredOn}</p>
        {storyPosts(posts, id).map(post => <Post key={post.post.id} {...post}/>)}
      </CardContent>
    </>
  );
}

export default UserStory;
