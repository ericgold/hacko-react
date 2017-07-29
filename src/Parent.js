import React, { Component } from 'react';
import Child from './Child';

class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first: 'Mike',
		}
	}
	render() {
		return(
			<div>
				<h1>Dad: {this.state.first} {this.props.last}</h1>
				<Child first={"Eric"} last={this.props.last}/>
				<Child first={"Elena"} last={this.props.last}/>
			</div>
		)
	}
}

export default Parent;