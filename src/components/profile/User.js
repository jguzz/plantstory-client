import React from 'react';

function User({currentUser, currentAvatar}) {
  return (
    <>
	<img src={`http://localhost:3000/${currentAvatar}`} alt="The current users profile pic"/>
	
	<p>Username: {currentUser.username}</p>
	</>
  );
}

export default User;
