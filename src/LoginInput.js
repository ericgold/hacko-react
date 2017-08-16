import React from 'react';

function LoginInput(props) {
	return (
		<div>
			<input
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				onChange={props.onChange} 
				minLength={props.minLength}
				pattern={props.pattern}
				required/>
			<label htmlFor=""></label>
		</div>
	)
	
		
	
}

export default LoginInput;


