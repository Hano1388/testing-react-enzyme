import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
import async from 'middlewares/async';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(async))
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
