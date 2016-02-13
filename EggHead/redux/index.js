import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTodo from './components/add_todo';
import Footer from './components/footer';
import VisibleTodoList from './containers/visible_todo_list';

import {store} from './store'; //Test from L11


const TodoApp = ({store}) => (
			<div>
				<AddTodo store={store}/>
				<VisibleTodoList store={store}/>
				<Footer store={store}/>
			</div>
);


const render = () => {
	 let node = document.getElementById('root');
	 if (node) {
		ReactDOM.render( <TodoApp store={store}/>, document.getElementById('root') );
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
