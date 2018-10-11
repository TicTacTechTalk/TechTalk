import React, { Component } from "react";
import { connect } from 'react-redux';
import CityContainer from './CityContainer';
import axios from 'axios';
import * as actions from '../actions/actions'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({ 
  addEvents: events => dispatch(actions.addEvents(events))
})

class CityApp extends Component {
  
  componentDidMount() {
    const { addEvents } = this.props;
    
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
        <NavBar/>
        <CityContainer/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CityApp);
