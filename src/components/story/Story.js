import React from "react";
import Post from "./Post";

import CardContent from "@material-ui/core/CardContent";

function Story({
  acquiredOn,
  collection_id,
  created_at,
  id,
  nickname,
  owned,
  common_name,
  latin_name,
}) {
  return (
    <>
      <CardContent>
        <p>nickname: {nickname}</p>
        <p>Common Name: {common_name}</p>
        <p>Latin Name: {latin_name}</p>
        <p>Acquired on: {acquiredOn}</p>
        <Post />
      </CardContent>
    </>
  );
}

export default Story;
