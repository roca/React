import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router";

import Index from "./components/index";
import Follow from "./components/follow";

class App extends React.Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


let documentReady = () => {
  let reactNode = document.getElementById('react')
    if (reactNode) {
      ReactDOM.render(
        <Router>
          <Route component={App}>
              <Route path="/" component={Index}/>
              <Route path="/follow" component={Follow}/>
          </Route>
        </Router>
        ,reactNode);
    }
};


$(documentReady);
