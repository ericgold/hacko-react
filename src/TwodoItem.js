import React from 'react';

function TwodoItem(props) {
	return (
		<li>
			{props.twodo}
			<span onClick={() => props.handleDelete(props.idx)}> X</span>
		</li>
	)
}

export default TwodoItem;