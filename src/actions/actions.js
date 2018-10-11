import * as types from '../constants/actionTypes';
import axios from 'axios';


const addUserToDatabase =(username, password) => {
  console.log('username', username, 'password: ', password)
  return axios.post('http://localhost:3000/addUser', {
    username,
    password
  })
}

export const createUser = (username, password) => dispatch => {
  addUserToDatabase(username, password)
    .then(winner => dispatch({
      type: types.SUCCESS_CREATE_USER,
      payload: {
        isLoggedIn: true
      }
    }))
    .catch(failure => dispatch({
      type: types.FAIL_CREATE_USER,
      payload: {
        isLoggedIn: false
      }
    }))
};

export const addEvents = events => ({
  type: types.ADD_EVENTS,
  payload: events
});

export const toggleCity = (city) => ({
  type: types.TOGGLE_CITY,
  payload: city
})