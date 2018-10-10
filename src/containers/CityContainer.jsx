import React, { Component } from "react";
import { connect } from 'react-redux';
import CityCard from '../components/CityCard.jsx';

const mapStateToProps = state => ({
  events: state.event.events
});

const mapDispatchToProps = dispatch => ({

});


class CityContainer extends Component {
  
  render() {
    const { events } = this.props;
    // Loop over events list, create a Set of unique locations out of cities...
    const cityList = new Set(events.map(event => {
      return event.location
    }));
    //convert Set to Array...
    const newCityList = [...cityList];
    //create an empty array for all CityCards to get pushed to...
    const cityCards = [];
    for (let i = 0; i < newCityList.length; i++) {
      cityCards.push(
          <CityCard key={i} location={newCityList[i]} events={events.filter(event => event.location === newCityList[i])} />
      )
    };
    return (
      <div>
        {cityCards}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
