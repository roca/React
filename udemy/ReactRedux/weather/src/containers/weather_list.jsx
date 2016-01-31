import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData) {

		const city = cityData.city;
		const id = city.id;
		const name = city.name;
		const temps = cityData.list.map(weather => (weather.main.temp *( 9.0 / 5.0)) - 459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = city.coord;

     return (
			<tr key={id}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td>
				   <Chart data={temps} color="orange" units="F"/>
				</td>
				<td>
				   <Chart data={pressures} color="green"  units="hPa"/>
				</td>
				<td>
				   <Chart data={humidities} color="black"  units="%"/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather } ;
}


export default connect(mapStateToProps)(WeatherList);
