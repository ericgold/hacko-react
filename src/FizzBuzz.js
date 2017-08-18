import React from 'react';

function FizzBuzz(props) {
	return (
		<div>
			{
				props.number % 2 === 0 ? <div>even</div> : <div>odd</div>
			}
		</div>
	)
}

export default FizzBuzz;