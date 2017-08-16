import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	padding: 4rem;
	background: ${(props) => props.primary ? 'lightblue' : 'lightgray'};
`;

const Title = styled.h1`
	font-size: 2rem;
	color: red;
	font-family: helvetica;
`;

const MyInput = styled.input`
`;

function StyledComponents() {
	return (
		<Wrapper primary>
			<Title>Hello world</Title>
			<MyInput placeholder="Type here"/>
		</Wrapper>
	) 
}

export default StyledComponents;