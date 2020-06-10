import React from 'react';

function User({currentUser, currentAvatar}) {
  return (
    <>User 
	Profile Pic
	<img src={`http://localhost:3000/${currentAvatar}`} alt="The current users profile pic"/>
	Username
	<p>{currentUser.username}</p>
	</>
  );
}

export default User;
