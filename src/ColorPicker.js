import React from 'react';
import './ColorPicker.css';

class ColorPicker extends React.Component {
	

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			colors: ['black', 'indianred', 'mistyrose']
		}
		this.update = this.update.bind(this);
	}
	update() {
		// if statement
		// multiple setState calls inside it

		if (this.state.index <= this.state.colors.length) {
			this.setState({
				index: this.state.index + 1
			})
		} else {
			this.setState({
				index: 0
			})
		}
	}

	render() {
		const { colors, index } = this.state;
		return (
			<div 
				className="colorbox" 
				style={{backgroundColor: colors[index]}} 
				onClick={this.update}>
			</div>
		)
	}
}


export default ColorPicker;