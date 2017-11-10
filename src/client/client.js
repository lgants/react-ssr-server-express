// Startup point for the app in the browser
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// want to render the app into the same div the app was initial rendered into
// BrowserRouter doesn't work on server since it's hardcoded to use an address bar, which isn't available on the server
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector('#root')
);
