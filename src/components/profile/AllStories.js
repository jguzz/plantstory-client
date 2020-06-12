import React from 'react';
import Story from '../story/Story'

function AllStories({stories}) {
  console.log(stories)
  return (
     <> <h3>All Stories</h3>
  {stories.map( array => array.map((story,index) =><Story key={index} {...story}/>))}</>
  );
}

export default AllStories;
