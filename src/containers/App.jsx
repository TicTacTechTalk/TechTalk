import React, { Component } from "react";
import { connect } from 'react-redux';
import CityContainer from './CityContainer.jsx';


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({ 
})


class App extends Component {
  
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
