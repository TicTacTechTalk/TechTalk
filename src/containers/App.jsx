import React, { Component } from "react";
import { connect } from 'react-redux';
import CityContainer from './CityContainer.jsx';
import LoginContainer from './LoginContainer.jsx';
import axios from 'axios';
import * as actions from '../actions/actions.js'
import NavBar from '../components/NavBar.jsx'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({ 
  addEvents: events => dispatch(actions.addEvents(events))
})

class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <LoginContainer />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
