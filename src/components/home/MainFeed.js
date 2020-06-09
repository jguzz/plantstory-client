import React from 'react';
import Story from '../story/Story'

function MainFeed({stories}) {
  return (
    <>MainFeed
      {stories.map(story => <Story {...story}/>)}
    </>
  );
}

export default MainFeed;
