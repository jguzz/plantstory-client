import React from "react";
// Material UI
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

function Collection({ posts,stories,created_at, description, id, name, user_id, }) {
  return (
    <>

        <Card component={Link} to={{pathname:`/profile/collection_list/${id}`, state:{name: name, description,stories,posts}}}>
          <p>Name: {name}</p>
          <p>Description: {description}</p>
        </Card>
    </>
  );
}

export default Collection;
