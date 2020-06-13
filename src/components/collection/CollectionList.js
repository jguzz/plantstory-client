import React from 'react';
import Collection from './Collection'
import CollectionShow from './CollectionShow'
import { Route, Switch, Link } from "react-router-dom";

function CollectionList({collections, stories,posts}) {
  return (
    <>
    <h3>All Collections</h3>
    
    <Switch>
      <Route exact path={`/profile/collection_list/:id`} render={(collection) => <CollectionShow stories={stories}posts={posts} {...collection} />}/>
      <Route exact path="/profile/collection_list" render={() => collections.map(collection => <Collection key={collection.id} {...collection} posts={posts} stories={stories}/> )}/>
    </Switch>
    </>
  );
}

export default CollectionList;
