import React from "react";
import PlantBackground from './gilles-lambert-mSK5nNsAsLY-unsplash.jpg'
import './welcome.sass'
import { Link } from "react-router-dom";
// ==== Material UI ====
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//hook for checking if an el is in viewport
import useIsInViewport from 'use-is-in-viewport'



const useStyles = makeStyles(() => ({
	root: {
		position: 'fixed',
		left: 0,
		top: 0,
		width: '100vw',
		height: '100vh',
		backgroundImage: `url(${PlantBackground})` ,
	},
	img: {
		position: 'fixed',
		left: 0,
		top: 0,
		height: '100%',
		minWidth: '100vw',
		margin: 'auto',
		// zIndex: -2,
		background: 'black'
	},
	credit: {
		position: 'fixed',
		bottom: 0,
		color: 'white',
		margin: 'auto',
		right: 0
	},
	container: {
		background: `rgb(235, 237, 235, .2)`,
		position: 'relative',
		margin: 'auto',
		height: '80vh',
		width: '80vw',
		bottom: '10vh',
		top: '10vh',
		borderRadius: '25px'
	},
	link: {
		color: 'white'
	},
	title: {
		color: 'white',
		textAlign: 'center',
		paddingTop: '.5em'
	},
	buttonContainer: {
		height: '40vh',
	},
	button: {
		background: 'rgb(6, 61, 18, .8)',
		color: 'white',
		minWidth: '20em'
	},
	detail: {
		color: 'white',
		textAlign: 'center',
		margin: 'auto',
		paddingBottom: '1em'
	} 
}));

function Welcome(){
	const classes = useStyles();
	const [isInViewport, targetRef] = useIsInViewport()
	var visable = `${isInViewport ? 'visible' : 'hidden'}`
	return (
	<>
		<img className={classes.img} src={PlantBackground} alt="Monstera Background"/>
		<div ref={targetRef} className={visable}>

		<div  className={classes.container}>
			{/* <img alt="" src={PlantBackground} className={classes.img}/> */}
			<Typography variant="h2" className={classes.title}>Welcome to PlantStory</Typography>
			<Typography variant="h6" className={classes.detail}>A social media platform aimed at sharing the growth of your plants with the world!</Typography>
			<Grid container direction="column" justify="space-around" alignItems="center" className={classes.buttonContainer}>
				<Button component={Link} to="/mainfeed" className={classes.button}>Main Feed</Button>
				<Button component={Link} to="/login" className={classes.button}>Log In</Button>
				<Button component={Link} to="/signup" className={classes.button}>Create Account</Button>
			</Grid>
			<span className={classes.credit}>Photo by <a className={classes.link} href="https://unsplash.com/@gilleslambert?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gilles Lambert</a> on <a className={classes.link} href="https://unsplash.com/s/photos/plants?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
		</div>
		</div>
	</>
	)
}

export default Welcome