import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyA_q9hMVS0wi8nIjz1o2BmxfA7_wGL4u3k";


const App = () => {
  return (
  		<div>
  			<SearchBar />
  		</div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
