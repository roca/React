import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import DevTools from '../containers/dev_tools';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div>
          <SearchBar />
      	</div>
      </div>
    );
  }
}
