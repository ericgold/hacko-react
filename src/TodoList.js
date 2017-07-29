import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			todos: [
				'Buy milk',
				'Walk dog',
				'Pay bills',
				'another todo'
			]
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleInputChange(event) {
		this.setState({
			inputValue: event.target.value
		})
	}
	handleDelete(idx) {
    const {todos} = this.state;
    const updatedTodos = todos.slice(0, idx).concat(todos.slice(idx + 1, todos.length))
    this.setState({
      todos: updatedTodos
    })
  }
	handleSubmit(event) {
		event.preventDefault();
		const { todos, inputValue } = this.state;
		const updatedTodos = todos.concat(inputValue);
		this.setState({
			todos: updatedTodos,
			inputValue: ''
		})
	}
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleInputChange} value={this.state.inputValue} type="text"/>
				</form>
				<ul>
					{ this.state.todos.map((todo, idx) => 
						<Todo 
							key={todo}
							handleDelete={this.handleDelete} 
							todo={todo} 
							idx={idx} 
						/>
					)}	
				</ul>
			</div>
		);
	}
	
}

export default TodoList;