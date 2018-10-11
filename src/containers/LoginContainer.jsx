import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'
import LoginForm from '../components/LoginForm.jsx';


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  createUser: (username, password) => dispatch(actions.createUser(username, password))
})

class LoginPage extends Component {
  
  submit = values => {
    const { createUser } = this.props;
    const { username, password } = values;
    createUser(username, password);
  };

  render() {
    return <LoginForm onSubmit={this.submit}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);