import React from "react";
// Material UI
import Card from "@material-ui/core/Card";

function Collection({ created_at, description, id, name, user_id }) {
  return (
    <>
      <Card >
        <p>Name: {name}</p>
        <p>Description: {description}</p>
      </Card>
    </>
  );
}

export default Collection;
