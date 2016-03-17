import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/todo_list';
import { toggleTodo } from '../actions/index';



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

const mapStateToProps = (state) => {
	return {
		todos: getVisibiltyTodos(state.todos,state.visibilityFilter)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		}
	};
}

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);



// class VisibleTodoList extends Component {

// 	componentDidMount() {
// 	const { store } = this.context;
//     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//   }

//   componentWillUnMount() {
//     this.unsubscribe();
//   }

// 	render() {
// 		const props = this.props;
// 		const { store } = this.context;
// 		const state = store.getState();

// 		return (
// 			<TodoList
// 				todos={getVisibiltyTodos(state.todos,state.visibilityFilter)}
// 				onTodoClick={id => store.dispatch({type:'TOGGLE_TODO',id})} />
// 		);
// 	}
// }

// VisibleTodoList.contextTypes = {
// 	store: React.PropTypes.object
// }


export default VisibleTodoList;
