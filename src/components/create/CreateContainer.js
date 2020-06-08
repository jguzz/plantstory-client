import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import NewStory from './NewStory'
import NewPost from './NewPost'


function CreateContainer() {
  return (
    <>CreateContainer
	<Link to="/create/story">Create a Story</Link>
	<Link to="/create/post">Create a Post</Link>
     <Switch>
		 <Route path="/create/story" render={() => <NewStory/>}/>
		 <Route path="/create/post" render={() => <NewPost/>}/>
	 </Switch>
    </>
  );
}

export default CreateContainer;
