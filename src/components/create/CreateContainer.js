import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import NewStory from './NewStory'
import NewPost from './NewPost'
import NewCollection from './NewCollection'

import Button from '@material-ui/core/Button'


function CreateContainer() {
  return (
    <>
	<Button component={Link} to="/create/collection">Create a Collection</Button>
	<Button component={Link} to="/create/story">Create a Story</Button>
	<Button component={Link} to="/create/post">Create a Post</Button>
     <Switch>
		 <Route path="/create/story" render={() => <NewStory/>}/>
		 <Route path="/create/post" render={() => <NewPost/>}/>
		 <Route path="/create/collection" render={() => <NewCollection/>}/>
	 </Switch>
    </>
  );
}

export default CreateContainer;
