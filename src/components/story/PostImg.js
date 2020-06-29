import React from 'react';

import Card from '@material-ui/core/Card'

import CardMedia from '@material-ui/core/CardMedia'




function PostImg({handleNext, handleBack, activeStep, post, post_img}) {
  return (
    <>
	     <CardMedia
          component="img"
          alt={post.caption}
          height="140"
          image={`http://localhost:3000/${post_img}`}
          title={post.caption}
        />
		
    </>
  );
}

export default PostImg;
