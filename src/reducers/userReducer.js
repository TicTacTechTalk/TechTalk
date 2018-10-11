import * as types from '../constants/actionTypes.js';

const initialState = {
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SUCCESS_CREATE_USER:
      return {
        ...state,
        events: action.payload
      }
    case types.FAIL_CREATE_USER:
    return {
      ...state,
      events: action.payload
    }
    default:
    return state
  }
};

export default userReducer;