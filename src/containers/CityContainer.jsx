import React, { Component } from "react";
import { connect } from 'react-redux';
import CityCard from '../components/CityCard.jsx';
import EventCard from '../components/EventCard.jsx';

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
      return event.city
    }));
    //convert Set to Array...
    const newCityList = [...cityList];
    //create an empty array for all CityCards to get pushed to...
    const cityCards = [];
    let selectedEvents = [];
    const eventObj = {};
    let selected = 'Los Angeles'; // TODO: Move this Toggle to Redux Store

    for (let i = 0; i < newCityList.length; i++) {
      cityCards.push(
          <CityCard key={i} location={newCityList[i]} />
      )

      // TODO: Refactor to not reconstruct info from Scrape
      eventObj[newCityList[i]] = events.filter(event => event.city === newCityList[i]);
    }

    // TODO: Does this need to live here?
    for (let key in eventObj) {
      if (key === selected) {
        for (let i = 0; i < eventObj[key].length; i += 1) {
          selectedEvents.push(
              <EventCard 
                key={i}
                name={eventObj[key][i].name} 
                organizedBy={eventObj[key][i].organized_by} 
                date={eventObj[key][i].date}
                city={key}
                />
          ) 
        }
      }
    }

    if (!selected) {
      return ( 
        <div>
          {cityCards}
        </div>
      )
    } else {
      return ( 
        <div>
          {selectedEvents}
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
