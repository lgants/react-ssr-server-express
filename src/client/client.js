// Startup point for the app in the browser
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

// Use initial state value set in a script inside renderer.js
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);

// Need to render the app into the same div the app was initially rendered into
// BrowserRouter doesn't work on server since it's hardcoded to use an address bar, which isn't available on the server
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
