import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },

}));

export default function ToDoList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position ="static" color="inherit">
        <Toolbar variant="dense">
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            To-Do List
          </Typography>

          <Typography variant="body1">Put in your most needed items to do</Typography>
          
      </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}