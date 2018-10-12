import React, { Component } from "react";
import { connect } from 'react-redux';
import CityApp from './CityApp.jsx';
import LoginContainer from './LoginContainer.jsx';
import axios from 'axios';
import * as actions from '../actions/actions.js'
import NavBar from '../components/NavBar.jsx'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({ 
  toggleCity: city => dispatch(actions.toggleCity(city))
})

class App extends Component {
  render() {
    const { toggleCity } = this.props
    return (
      <div>
        <NavBar toggleCity={toggleCity}/>
        {/* <LoginContainer /> */}
        <CityApp />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
