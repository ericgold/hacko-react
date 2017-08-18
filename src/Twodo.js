import React from 'react';
import styled from 'styled-components';
//import TwodoItem from './TwodoItem';

function TwodoItem(props) {
	return (
		<li>
			{props.twodo}
			<span onClick={() => props.handleDelete(props.idx)}> X</span>
		</li>
	)
}

class Twodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			twodos: [
				'Learn React',
				'Debate Styling',
				'Crack Bad Jokes'
			],
			inputValue: ''
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleInput(event) {
		this.setState({inputValue:event.target.value})
	}
	handleSubmit(event) {
		event.preventDefault();
		const { twodos, inputValue } = this.state;
		const updatedTwodos = twodos.concat(inputValue);
		this.setState({
			twodos:updatedTwodos,
			inputValue:''});
	}
	handleDelete(listIdx) {
		const updatedTwodos = this.state.twodos.filter((item, idx) =>
			listIdx !== idx);
		this.setState({
			twodos: updatedTwodos
		})
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.handleInput} value={this.state.inputValue}/>
				<button type="submit" onClick={this.handleSubmit}>Submit</button>
				<ul>
					{ this.state.twodos.map((twodo, idx) => 
						<TwodoItem 
							twodo={twodo}
							key={twodo}
							idx={idx}
							handleDelete={this.handleDelete}
						/>
						)

					}
				</ul>
			</div>
		)
	}
}

export default Twodo;