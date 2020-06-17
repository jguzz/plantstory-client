import React from 'react';
import Story from '../story/Story'

function AllStories({stories}) {
  return (
    <>{stories.map(story => <Story {...story}/>)}</>
  );
}

export default AllStories;
