import React from 'react';

function CollectionShow({created_at, description, id, name, user_id}) {
  return (
    <>
    <p>Name: {name}</p>
  <p>Description: {description}</p>
    </>
  );
}

export default CollectionShow;