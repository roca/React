import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import configureStore from './store/configureStore';

const initial_state = {
}

const store = configureStore(initial_state);

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers),store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
