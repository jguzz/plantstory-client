import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   card: {
     margin: 'auto',
    marginTop: '4em',
    height: '50%',
    width: '50%',
    backgroundColor: '#00b359',
    padding: '2em'
  },
  text: {
    color: 'white'
  }
}))

function Collection({
  posts,
  stories,
  created_at,
  description,
  id,
  name,
  user_id,
  likes,
}) {
  const classes = useStyles()
  return (
    <>
       
      <Grid item xs={12}>
        <Card
        className={classes.card}
          
          >
            <Link
            style={{ textDecoration: 'none' }}
            to={{
              pathname: `/profile/collection_list/${id}`,
              state: { name: name, description, stories, posts }
            }}>
            
          <Typography className={classes.text} variant="h4">{name}</Typography>
          <Typography className={classes.text} variant="subtitle1">{description}</Typography>
            </Link>
        </Card>
      </Grid>
     
    </>
  );
}

export default Collection;
