import React from 'react';
import CollectionShow from './CollectionShow'

function CollectionList({collections}) {
  return (
    <>
    <h3>All Collections</h3>
    {collections.map(collection => <CollectionShow key={collection.id} {...collection}/> )}
    </>
  );
}

export default CollectionList;
