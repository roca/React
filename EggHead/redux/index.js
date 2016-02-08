import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {testAddTodo as testL11, testToggleTodo as testL12 , store} from './todo_list_reducer'; //Test from L11

let nextId=0;
class TodoApp extends Component {
	render() {
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
				<ul>
					{ this.props.todos.map(todo =>
						<li key={todo.id} onClick={() =>{
							store.dispatch({
								type: 'TOGGLE_TODO',
								id: todo.id
							});
						}} style = {{
							textDecoration: todo.completed ? 'line-through' : 'none'
						}}>
							{todo.text}
						</li>
					)}
				</ul>
			</div>
		);
	}
}


const render = () => {
	 let node = document.getElementById('root');
	 if (node) {
		ReactDOM.render(
			<TodoApp todos={store.getState().todos}/>,
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
