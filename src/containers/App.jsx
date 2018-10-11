import React, { Component } from "react";
import { connect } from 'react-redux';
import CityContainer from './CityContainer.jsx';
import LoginContainer from './LoginContainer.jsx';
import axios from 'axios';
import * as actions from '../actions/actions.js'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({ 
  addEvents: events => dispatch(actions.addEvents(events))
})

class App extends Component {
  
  componentDidMount() {
    const { addEvents, toggleCity, selected } = this.props;
    
    function getLA () {
      return axios.get('http://localhost:3000/builtinla')
    };
    
    function getNY() {
      return axios.get('http://localhost:3000/builtinny')
     };

    axios.all([getLA(), getNY()])
      .then(axios.spread( function(LA, NY) {
          addEvents([...LA.data,...NY.data]);
      }));
  }

  render() {
    return (
      <div>
        {/* <LoginContainer /> */}
        <CityContainer />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
