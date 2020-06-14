import React from 'react';
import Photo from './Photo'
import Details from './Details'
import Card from '@material-ui/core/Card'
import Comment from './Comment'

function numLikes(likes, post){
  const num = likes.filter(like => like.post_id === post.id)
  console.log(num, post.id)
  return num.length
}

function Post({post_img,post,handleLike,likes}) {
  return (
    <>
    <Card >
    <button onClick={() => handleLike(post.id)}>like</button>
    <img src={`http://localhost:3000/${post_img}`} alt={post.caption} />
    <p>{post.caption}</p>

    <div>{numLikes(likes,post)} like </div>
    {/* <Photo/>
    <Details/> */}
    <Comment/>
    </Card>
    </>
  );
}

export default Post;
