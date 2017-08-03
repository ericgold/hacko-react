import React, { Component } from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

export default class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.props.onTemperatureChange(event.target.value);
	}
	render() {
		const { temperature } = this.props;
		const { scale } = this.props;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
				<input 
					onChange={this.handleChange}
					value={temperature} />
				
			</fieldset>
		);
	}
}

