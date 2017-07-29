import React from 'react';

const Todo = (props) => {
	return (

		<li key={props.todo}>
			{props.todo}<span onClick={() => props.handleDelete(props.idx)}>&nbsp;X</span>
		</li>
	)
}

export default Todo;