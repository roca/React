import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/dev_tools';

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore);

export default function configureStore(initial_state) {
  const store = finalCreateStore(rootReducer, initial_state);
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }
  return store;
};
