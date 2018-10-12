import React, {Component} from 'react';
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
  const { classes, toggleJoin, id, city, change } = this.props;
  const style = this.state.joined? 'contained' : 'outlined'

    return (
      <div>
        <Button variant={style} color="primary" classname={classes.button} id={id} onClick={() => this.setState({
          joined: this.state.joined? false: true
        })} >
          JOIN
        </Button>
      </div>

    )
  }
};

export default withStyles(styles)(OutlinedButtons);