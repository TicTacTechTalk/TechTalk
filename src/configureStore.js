import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/rootReducer'

import monitorReducersEnhancer from './enhancers/monitorReducer.js';
import loggerMiddleware from './middleware/logger.js';

export default function configureStore(preloadedstate) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(reducers, preloadedstate, composedEnhancers);

  return store;
}