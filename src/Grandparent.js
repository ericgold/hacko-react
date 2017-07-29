import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first: 'Sol',
			last: 'Gold'
		}
	}
	render() {
		const { first, last } = this.state; // destructuring
		return(
			<div>
				<h1>Grandpa: {first} {last}</h1>
				<Parent last={last}/>
			</div>	
		)
	}
}

export default Grandparent;