import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {testAddTodo as testL11, testToggleTodo as testL12 , store} from './todo_list_reducer'; //Test from L11
import TodoList from './components/todo_list';
import FilterLink from './components/filter_link';


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
class TodoApp extends Component {
	render() {

		const {
			todos,
			visibilityFilter
		} = this.props;

		const visibleTodos = getVisibiltyTodos(
			todos,
			visibilityFilter
		);

		return (
			<div>
				<input ref={node => {
					this.input = node;
				}} />
				<button onClick={ () => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.input.value,
						id: nextId++
					});
					this.input.value = '';
				}}>Add todo</button>
				<TodoList
					todos={visibleTodos}
					onTodoClick={id => store.dispatch({type:'TOGGLE_TODO',id})}
				/>
				<p>
					SHOW:
					{' '}<FilterLink store={store} filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
					{', '}<FilterLink store={store} filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
					{', '}<FilterLink store={store} filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Completed</FilterLink>
				</p>
			</div>
		);
	}
}

const render = () => {
	 let node = document.getElementById('root');
	 if (node) {
		ReactDOM.render(
			<TodoApp {...store.getState()} />,
			document.getElementById('root')
		);
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
