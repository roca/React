import React from 'react';

let nextId=0;

const AddTodo = ({store}) => {

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
