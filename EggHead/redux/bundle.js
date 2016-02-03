/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	//import { createStore } from 'redux';

	var counter = function counter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'INCREMENT':
	      return state + 1;
	    case 'DECREMENT':
	      return state - 1;
	    default:
	      return state;
	  }
	};

	var createStore = function createStore(reducer) {
	  var state = undefined;
	  var listeners = [];

	  var getState = function getState() {
	    return state;
	  };

	  var dispatch = function dispatch(action) {
	    state = reducer(state, action);
	    listeners.forEach(function (listener) {
	      return listener();
	    });
	  };

	  var subscribe = function subscribe(listener) {
	    listeners.push(listener);
	    return function () {
	      listeners = listeners.filter(function (l) {
	        return l !== listener;
	      });
	    };
	  };

	  dispatch({});

	  return { getState: getState, dispatch: dispatch, subscribe: subscribe };
	};

	var store = createStore(counter);
	var render = function render() {
	  document.body.innerText = store.getState();
	};

	store.subscribe(render);
	document.addEventListener("DOMContentLoaded", render);

	document.addEventListener('click', function () {
	  store.dispatch({ type: 'INCREMENT' });
	});

/***/ }
/******/ ]);