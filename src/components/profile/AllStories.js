import React from 'react';
import Story from '../story/Story'

function AllStories({stories}) {
  return (
     <> <h3>All Stories</h3>
  {stories.map(story => <Story {...story}/>)}</>
  );
}

export default AllStories;
