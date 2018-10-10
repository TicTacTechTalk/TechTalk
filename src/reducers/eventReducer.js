const initialState = {
  //Key: Value.reducer.key
  events: [
    {
      id: 1,
      location: 'Los Angeles',
      date: '04/30/18',
      name: 'JS Meetup'
    },
    {
      id: 2,
      location: 'New York City',
      date: '05/12/18',
      name: 'Python Meetup'
    },
    {
      id: 3,
      location: 'New York City',
      date: '05/22/18',
      name: 'Javascript Meetup'
    },
    {
      id: 4,
      location: 'Los Angeles',
      date: '03/21/18',
      name: 'Ruby Meetup'
    }
  ],
  cities: ['New York City', 'Chicago', 'Los Angeles', 'Boston'],
  currentLocation: '',
  selectedEvents: [],
  cityOn: false,
  
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    return state
  }
};

export default eventReducer;