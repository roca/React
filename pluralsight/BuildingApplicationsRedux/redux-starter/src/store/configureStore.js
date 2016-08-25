import {createStore, applyMiddleware} from'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'reduxImmutableStateInvariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
