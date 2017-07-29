import React from 'react';

function Child(props) {
	return(
		<div>
			<h1>Child: {props.first} {props.last}</h1>
		</div>
	)
}

export default Child;