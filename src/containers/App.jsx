import React, { Component } from "react";
import { connect } from 'react-redux';
import CityContainer from './CityContainer.jsx';
import axios from 'axios';


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({ 
})



class App extends Component {
  
  componentDidMount() {
<<<<<<< HEAD
    axios.get
=======

    function getLA(){
      return axios.get('http://localhost:3000/builtinla')
    }
    function getNY() {
      return axios.get('http://localhost:3000/builtinny')
    }
    axios.all(getLA, getNY)
      .then(axios.spread(function(LA, NY ) {
        // place action here to input data into store
      }))
>>>>>>> master
  }


  render() {
    return (
      <div>
        <CityContainer
          /*props go here */
        />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
