import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class OutlinedButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      joined: false
    }
  }

  render() {
    const { classes } = this.props;
    const style = this.state.joined? 'contained' : 'outlined'

    return (
      <div>
        <Button variant={style} color="secondary" classname={classes.button} onClick={() => this.setState({
          joined: this.state.joined? false: true
        })}>
        FAVORITE
        </Button>
      </div>
  
    )
  }
};

export default withStyles(styles)(OutlinedButtons);