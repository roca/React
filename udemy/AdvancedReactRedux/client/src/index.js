import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <BrowserRouter basename="/dev">
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" exact component={Signup} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
