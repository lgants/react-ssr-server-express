// Create store for the client side of the app
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../clients/reducers';

export default req => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
  );

  return store;
};
