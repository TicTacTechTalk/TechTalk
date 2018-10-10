import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/rootReducer'
import App from '../src/containers/App.jsx';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
)

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("root")
)