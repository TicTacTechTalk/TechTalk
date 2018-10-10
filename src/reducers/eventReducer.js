import * as types from '../constants/actionTypes.js';

const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {

  const copy = Object.assign({}, state)

  switch (action.type) {

    case types.ADD_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    default:
    return state
  }
};

export default eventReducer;