import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  home: {
    cursor: 'pointer'
  }
})

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="title" color="inherit"  className={classes.home} onClick={() => { 
          props.toggleCity(false)}}>
            TECH TALK
          </Typography>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Navbar);