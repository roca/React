import React from 'react';
import { Component } from 'react';
import DevTools from '../containers/dev_tools';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';


export default class App extends Component {
  render() {
    return (
      <div>
      	<div>
          <SearchBar />
          <WeatherList />
      	</div>
      </div>
    );
  }
}
