"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var InitializeActions = require('./actions/initializeActions.js');

InitializeActions.initApp();

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById('app'));
});
