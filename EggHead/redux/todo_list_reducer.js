import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';


const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
		return {
							id: action.id,
							text: action.text,
							completed: false
						};
		case 'TOGGLE_TODO':
				if (state.id !== action.id) {
					return state;
				}
				return {...state,completed: !state.completed}
			default:
			return state;
	}

}

const todos = (state=[],action) => {
	switch (action.type) {
		case 'ADD_TODO':
		 return [
		 ...state,
			todo(undefined,action)
		 ];
	  case 'TOGGLE_TODO':
		// return [
    //   ...state.slice(0, action.id),
    //   {...state[action.id],completed: !state[action.id].completed} ,
    //   ...state.slice(action.id + 1)
    // ]
		return state.map(t => todo(t, action));
		default:
		 return state;
	}
	return state
}

export const testAddTodo = () => {
	const stateBefore = [];
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: 'Learn Redux'
	}

	const stateAfter = [
	{
		id: 0,
		text: 'Learn Redux',
		completed: false
	}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore,action)).toEqual(stateAfter);
	console.log('L11 testing todo list reducer passed.')

}

export const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go shoping',
			completed: false
		}
	];

	const action = { type: 'TOGGLE_TODO', id: 1};

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go shoping',
			completed: true
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore,action)).toEqual(stateAfter);

	console.log('L12 testing toggle todo list reducer passed.');

	const visibilityFilter = (state= 'SHOW_ALL',action) => {
		switch(action.type) {
			case 'SET_VISIBILITY_FILTER':
				return action.filter;
			default:
				return state;
		}
	}

	const todoApp = (state= {}, action) => {
		return {
			todos: todos(state.todos,action),
			visibilityFilter: visibilityFilter(state.visibilityFilter,action)
		};
	}


	const store = createStore(todoApp);

	console.log('Initial state');
	console.log(store.getState());
	console.log('-------------');

	console.log('Dispatching ADD_TODO');
	store.dispatch({...stateBefore[0],type:'ADD_TODO'});
	console.log('Current state');
	console.log(store.getState());
	console.log('-------------');

	console.log('Dispatching ADD_TODO');
	store.dispatch({...stateBefore[1],type:'ADD_TODO'});
	console.log('Current state');
	console.log(store.getState());
	console.log('-------------');


	console.log('Dispatching TOGGLE_TODO');
	store.dispatch(action);
	console.log('Current state');
	console.log(store.getState());
	console.log('-------------');


    console.log('Dispatching SET_VISIBILITY_FILTER');
	store.dispatch({type:'SET_VISIBILITY_FILTER',filter:'SHOW_COMPLETED'});
	console.log('Current state');
	console.log(store.getState());
	console.log('-------------');

}
