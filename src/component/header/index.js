import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: 50,
    fontWeight:500,
    fontFamily:"Georgia",
    
  },
  subtitle: {
    fontSize: 25,
    fontWeight:500,
    fontFamily:"Georgia",
  },

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background:'#0F62FE'}} position ="static" >
        <Toolbar variant="dense">
        <CssBaseline />
       <Container component="main" className={classes.main} maxWidth="sm">
          <Typography className={classes.title} variant="h2" noWrap>
            To-Do List
          </Typography>

          <Typography className={classes.subtitle} variant="body1">Put in your most needed items to do</Typography>
          
      </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}