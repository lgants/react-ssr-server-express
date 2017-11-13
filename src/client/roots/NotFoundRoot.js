import React from 'react';

// StaticRouter renames context to staticContext
// Pass default since staticContext is provided by StaticRouter, which won't exist on client-side since browser renders with BrowserRouter
const NotFoundRoot = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (<h1>Ooops, route not found.</h1>);
};

export default {
  component: NotFoundRoot
};
