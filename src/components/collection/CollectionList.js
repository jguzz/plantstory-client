import React from 'react';
import Collection from './Collection'

function CollectionList({collections}) {
  return (
    <>
    <h3>All Collections</h3>
    {collections.map(collection => <Collection key={collection.id} {...collection}/> )}
    </>
  );
}

export default CollectionList;
