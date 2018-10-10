import * as types from '../constants/actionTypes';

export function createUser(username, userID) {
  type: types.CREATE_USER
  payload: {
    username,
    userID
  }
}

export const addEvents = events => ({ 
  type: types.ADD_EVENTS,
  payload: events
})


// export function fetchEvents() {
//   return dispatch=> {
//     fetch(`/events`,)
//   }
// }