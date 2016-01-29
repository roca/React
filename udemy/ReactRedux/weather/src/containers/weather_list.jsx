import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	renderWeather(cityData) {

		let id = cityData.city.id;
		let name = cityData.city.name;

     return (
			<tr key={id}>
				<td>{name}</td>
				<td>Temperature</td>
				<td>Pressure</td>
				<td>Humidity</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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
