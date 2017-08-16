import React from 'react';


function Avatar(props) {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '50px',
			width: '50px',
			borderRadius: '25px',
			color: `${props.foregroundColor}`,
			background: `${props.backgroundColor}`
		}}>
			{props.children}
		</div>
	) 
}

export default Avatar;
