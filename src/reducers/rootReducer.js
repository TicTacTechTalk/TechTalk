import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventReducer from './eventReducer';
// TODO import { all reducers } from file structure...

const reducers = combineReducers({
  user: userReducer,
  event: eventReducer
})

export default reducers;