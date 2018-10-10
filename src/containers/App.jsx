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
    axios.get
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
