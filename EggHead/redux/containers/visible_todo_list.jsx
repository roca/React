import React, { Component } from 'react';

import TodoList from '../components/todo_list';
import {store} from '../todo_list_reducer'; //Test from L11

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

class VisibleTodoList extends Component {

	componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

	render() {
		const props = this.props;
		const state = store.getState();

		return (
			<TodoList
				todos={getVisibiltyTodos(state.todos,state.visibilityFilter)}
				onTodoClick={id => store.dispatch({type:'TOGGLE_TODO',id})} />
		);
	}
}


export default VisibleTodoList;
