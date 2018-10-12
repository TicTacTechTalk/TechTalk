import React, { Component } from "react";
import { connect } from 'react-redux';
import CityCard from '../components/CityCard.jsx';
import EventCard from '../components/EventCard.jsx';
import * as actions from '../actions/actions'

const mapStateToProps = store => ({
  events: store.event.events,
  selected: store.event.selected,
  changeJoin: store.event.changeJoin,
  targetCity: store.event.targetCity,
  variant: store.event.variant
});

const mapDispatchToProps = dispatch => ({
  toggleCity: city => dispatch(actions.toggleCity(city)),
  toggleJoin: (id, city) => dispatch(actions.toggleJoin(id, city))
});


class CityContainer extends Component {
  
  render() {
    const { events, selected, toggleCity, toggleJoin, changeJoin, targetCity, variant } = this.props;
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
     // TODO: Move this Toggle to Redux Store

    for (let i = 0; i < newCityList.length; i++) {
      cityCards.push(
          <CityCard key={i} location={newCityList[i]} selected={selected} toggleCity={toggleCity} />
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
                id={i}
                name={eventObj[key][i].name} 
                organizedBy={eventObj[key][i].organized_by} 
                date={eventObj[key][i].date}
                city={key}
                toggleJoin={toggleJoin}
                />
          ) 
        }
      }
    }

    if (!selected) {
      return ( 
        <div className='city-container'>
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
