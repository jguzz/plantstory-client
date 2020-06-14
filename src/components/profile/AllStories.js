import React from 'react';
import Story from '../story/Story'

function AllStories({stories, posts , likes, handleLike}) {
  console.log(posts)
  return (
     <> <h3>All Stories</h3>
  {stories.map( (story,index) =><Story likes={likes} handleLike={handleLike} key={index} posts={posts}{...story}/>)}
  </>
  );
}

export default AllStories;
