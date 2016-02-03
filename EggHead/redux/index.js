import expect from 'expect';
import { createStore } from 'redux';

const  counter  = (state = 0, action)  => {

  switch (action.type) {
		case'INCREMENT' :
			return state + 1;
		case 'DECREMENT' :
			return state - 1;
		default:
			return state;
	}
}

const store = createStore(counter);
const render = () => {
	document.body.innerText = store.getState();
};

store.subscribe(render);
document.addEventListener("DOMContentLoaded",render);

document.addEventListener('click',() => {
    store.dispatch({type: 'INCREMENT'});
});
