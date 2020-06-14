import React from 'react';
import Story from '../story/Story'
// Material UI
import Card from '@material-ui/core/Card'

function MainFeed({stories,posts,handleLike,likes}) {
  return (
    <>MainFeed
      {stories.map(story => <Card><Story handleLike={handleLike} likes={likes} {...story} posts={posts}/></Card> )}
    </>
  );
}

export default MainFeed;
