import react from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import App from './src/components/containers/App.jsx';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)