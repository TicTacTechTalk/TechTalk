import * as types from '../constants/actionTypes.js';

const initialState = {
  events: [],
  selected: ''
};

const eventReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_EVENTS:
      return {
        ...state,
        events: action.payload
      }

    case types.TOGGLE_CITY:
    console.log(action.payload)
      return {
        ...state,
        selected: action.payload
      }

    default:
    return state
  }
};

export default eventReducer;