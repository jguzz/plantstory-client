import React from 'react';
import Story from '../story/Story'
// Material UI
import Card from '@material-ui/core/Card'

function MainFeed({stories}) {
  return (
    <>MainFeed
      {stories.map(story => <Card><Story {...story}/></Card> )}
    </>
  );
}

export default MainFeed;
