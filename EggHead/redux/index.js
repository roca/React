import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {testAddTodo as testL11, testToggleTodo as testL12 , store} from './todo_list_reducer'; //Test from L11
import AddTodo from './components/add_todo';
import Footer from './components/footer';
import VisibleTodoList from './containers/visible_todo_list';



const TodoApp = () => (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
);


const render = () => {
	 let node = document.getElementById('root');
	 if (node) {
		ReactDOM.render( <TodoApp />, document.getElementById('root') );
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
