import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  state: WeatherReducer
});

export default rootReducer;
