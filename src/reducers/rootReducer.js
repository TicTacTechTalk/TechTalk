import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import eventReducer from './eventReducer';
// TODO import { all reducers } from file structure...

const reducers = combineReducers({
  user: userReducer,
  event: eventReducer,
  form: formReducer
})

export default reducers;