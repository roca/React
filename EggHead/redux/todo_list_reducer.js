import expect from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (state,action) => {
	switch (action.type) {
		case 'ADD_TODO':
		 return [
		 ...state,
			{
				id: action.id,
				text: action.text,
				completed: false
			}
		 ];
	  case 'TOGGLE_TODO':
		// return [
    //   ...state.slice(0, action.id),
    //   {...state[action.id],completed: !state[action.id].completed} ,
    //   ...state.slice(action.id + 1)
    // ]
		return state.map(todo => {
			if (todo.id !== action.id) {
				return todo;
			}
			return {...todo,completed: !todo.completed}
		});
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
	console.log('L12 testing toggle todo list reducer passed.')


}
