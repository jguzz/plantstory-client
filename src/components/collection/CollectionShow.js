import React from 'react';
import Collection from './Collection'
import Story from '../story/Story.js'
import Post from '../story/Post.js'
import { Route, Switch, Link, useParams } from "react-router-dom";
import Card from '@material-ui/core/Card'

function CollectionShow(props) {
	let {id} = useParams()
	const {name, description, posts,stories} = props.location.state
  return (
    <>
    	<h3>Collection Show</h3>
		<p>{id}</p>
		<p>{name}</p>
		<p>{description}</p>
		{props.stories.map(story => story.collection_id === parseInt(id)?<Card><Story {...story} posts={props.posts}/></Card>:console.log('id doesnt match',story.collection_id,id) )}
    </>
  );
}

export default CollectionShow;
