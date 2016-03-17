import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AddTodo from './components/add_todo';
import Footer from './components/footer';
import VisibleTodoList from './containers/visible_todo_list';

import {store} from './store'; //Test from L11


const TodoApp = () => (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
);

// class Provider extends Component {
// 	getChildContext() {
// 		return {
// 			store: this.props.store
// 		}
// 	}
// 	render() {
// 		return this.props.children;
// 	}
// }

// Provider.childContextTypes = {
// 	store: React.PropTypes.object
// };


const render = () => {
	 let node = document.getElementById('root');
	 if (node) {
		ReactDOM.render( 
			<Provider  store={store} >
				<TodoApp />
			</Provider>
		, document.getElementById('root') 
		);
	 }
};

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  render();
} else {
  window.addEventListener('DOMContentLoaded', render, false);
}



// testL11(); //Test from L11
// testL12(); //Test from L12
