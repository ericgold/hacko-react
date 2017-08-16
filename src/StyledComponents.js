import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.section`
	padding: 4rem;
	background: ${props => props.primary ? 'lightblue' : 'lightgray'};
`;

const Title = styled.h1`
	font-size: 2rem;
	color: red;
	font-family: helvetica;
`;
const PurpleTitle = Title.extend`
	color: purple;
`;

const MyInput = styled.input`
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`
const Spinner = styled.div`
	animation: ${rotate} 2s linear infinite;
	display: inline-block;
`;

function StyledComponents() {
	return (
		<Wrapper primary>
			<PurpleTitle>Hello world</PurpleTitle>
			<MyInput placeholder="Type here"/>
			<Spinner>🥑</Spinner>
		</Wrapper>
	) 
}

export default StyledComponents;