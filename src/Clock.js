import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
		console.log('this is the constructor');
	}
	
	componentDidMount() {
		console.log('Component Did Mount!');
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
		console.log(this.timerID);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}



export default Clock;