import React from 'react';
import Post from './Post'

function Story({acquiredOn,collection_id,created_at,id,nickname,owned,plant_id}) {
  return (
    <>
    <p>nickname: {nickname}</p>
    <p>Acquired on: {acquiredOn}</p>  
    <Post/>
    </>
  );
}

export default Story;