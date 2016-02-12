import React from 'react';

import {store} from '../todo_list_reducer'; //Test from L11

let nextId=0;

const AddTodo = () => {

 let input;

 return(
	<div>
       <input ref={node => {input = node;}} />
		<button onClick={ () => {
			store.dispatch({ type: 'ADD_TODO', text: input.value, id: nextId++ });
			input.value = '';
		}}>
		Add todo</button>
	</div>
  );
};


export default AddTodo;
