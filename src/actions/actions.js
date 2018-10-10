import * as types from '../constants/actionTypes';

export function createUser(username, userID) {
  type: types.CREATE_USER
  payload: {
    username,
    userID
  }
}

// export function fetchEvents() {
//   return dispatch=> {
//     fetch(`/events`,)
//   }
// }