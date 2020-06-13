import React from 'react';
import Photo from './Photo'
import Details from './Details'
import Card from '@material-ui/core/Card'

function Post({post_img,post,handleLike}) {
  return (
    <>
    <Card onClick={handleLike}>

    <img src={`http://localhost:3000/${post_img}`} alt={post.caption} />
    <p>{post.caption}</p>
    <div> like </div>
    {/* <Photo/>
    <Details/> */}
    </Card>
    </>
  );
}

export default Post;
