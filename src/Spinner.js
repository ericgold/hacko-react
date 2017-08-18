import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const morph = keyframes`
	0% { border-radius: 5px }
	50% { border-radius: 50% }
	100% { border-radius: 5px }
`;

const Spinny = styled.div`
	width: 64px;
	height: 64px;
	background: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
	border-radius: 50%;
	margin: 0 auto;
	animation: ${spin} 1.5s ease-in-out infinite, ${morph} 1.5s linear infinite;
	@media (max-width: 500px) {
		background: linear-gradient(0deg, #ff0592 0%, #ffe500 100%);
	}
`;



function Spinner() {
	return (
		<div>Hello World</div>
	)
}

export default Spinner;