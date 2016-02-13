import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/todo_list';

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

// const mapStateToProps = (state) => {
// 	return {
// 		todos: getVisibiltyTodos(state.todos,state.visibilityFilter)
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onTodoClick: (id)=> {dispatch({type:'TOGGLE_TODO',id})}
// 	};
// }

// const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);



class VisibleTodoList extends Component {

	componentDidMount() {
	const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

	render() {
		const props = this.props;
		const { store } = props;
		const state = store.getState();

		return (
			<TodoList
				todos={getVisibiltyTodos(state.todos,state.visibilityFilter)}
				onTodoClick={id => store.dispatch({type:'TOGGLE_TODO',id})} />
		);
	}
}


export default VisibleTodoList;
