import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Feature from './components/Feature';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import reducers from './reducers';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/dev">
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
