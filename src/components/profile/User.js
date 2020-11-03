import React from 'react';

const BASE_URL = "https://pure-springs-07705.herokuapp.com/";

function User({currentUser, currentAvatar}) {
  return (
  <> 
  <p>{currentUser.name}</p> 
	<img src={`${BASE_URL}${currentAvatar}`} alt="avatar img"/>
	@{currentUser.username}
	</>
  );
}

export default User;
