export const todo = (state, action) => {
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

export const todos = (state=[],action) => {
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
