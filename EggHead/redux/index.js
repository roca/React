import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {testAddTodo as testL11, testToggleTodo as testL12 , store} from './todo_list_reducer'; //Test from L11
import TodoList from './components/todo_list';
import AddTodo from './components/add_todo';
import Footer from './components/footer';


const getVisibiltyTodos = (todos,filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
	}
};


let nextId=0;
const TodoApp = ({todos,visibilityFilter}) => (
			<div>
				<AddTodo
					onAddClick={ text => store.dispatch({ type: 'ADD_TODO', text: text, id: nextId++ }) } />
				<TodoList
					todos={getVisibiltyTodos(todos,visibilityFilter)}
					onTodoClick={id => store.dispatch({type:'TOGGLE_TODO',id})} />
				<Footer
					visibilityFilter={ visibilityFilter }
					onFilterClick = { filter =>store.dispatch({type: 'SET_VISIBILITY_FILTER', filter}) } />
			</div>
);


const render = () => {
	 let node = document.getElementById('root');
	 if (node) {
		ReactDOM.render( <TodoApp {...store.getState()} />, document.getElementById('root') );
	 }
};

store.subscribe(render);

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  render();
} else {
  window.addEventListener('DOMContentLoaded', render, false);
}



// testL11(); //Test from L11
// testL12(); //Test from L12
