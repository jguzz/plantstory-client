import React from 'react';
import Story from '../story/Story'
// Material UI
import Card from '@material-ui/core/Card'

function MainFeed({stories,posts,handleLike}) {
  return (
    <>MainFeed
      {stories.map(story => <Card><Story handleLike={handleLike} {...story} posts={posts}/></Card> )}
    </>
  );
}

export default MainFeed;
