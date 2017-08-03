import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './Temperatureinput';
import { toCelsius, toFahrenheit, tryConvert } from './helperFunctions';


class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: '',
			scale: 'c'
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}
	handleCelsiusChange(temperature) {
		this.setState({ 
			scale: 'c', temperature 
		});
	}
	handleFahrenheitChange(temperature) {
		this.setState({ 
			scale: 'f', temperature 
		});
	}
	render() {
		const { temperature, scale } = this.state;
		const celsius = scale === 'f' ? 
			tryConvert(temperature, toCelsius) :
			temperature;
		const fahrenheit = scale === 'c' ?
			tryConvert(temperature, toFahrenheit) :
			temperature;
		return (
			<div>
				<TemperatureInput 
					onTemperatureChange={this.handleCelsiusChange} 
					temperature={celsius} 
					scale={'c'} />
				<TemperatureInput 
					onTemperatureChange={this.handleFahrenheitChange} 
					temperature={fahrenheit} 
					scale={'f'} />
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		)
		
	}
}

export default Calculator;