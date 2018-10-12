import * as types from '../constants/actionTypes.js';

const initialState = {
  events: [],
  selected: '',
  changeJoin: null,
  targetCity: null,
  variant: false
};

const eventReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_EVENTS:
      return {
        ...state,
        events: action.payload
      }

    case types.TOGGLE_CITY:
      return {
        ...state,
        selected: action.payload
      }

    case types.TOGGLE_JOIN:
    return {
      ...state,
      changeJoin: action.payload.id,
      targetCity: action.payload.city,
      variant: state.variant? false: true
    }

    default:
    return state
  }
};

export default eventReducer;