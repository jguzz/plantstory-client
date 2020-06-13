import React from 'react';
import Photo from './Photo'
import Details from './Details'

function Post({post_img,post}) {
  return (
    <>
    <img src={`http://localhost:3000/${post_img}`} alt={post.caption} />
    <p>{post.caption}</p>
    {/* <Photo/>
    <Details/> */}
    </>
  );
}

export default Post;
