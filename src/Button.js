import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
	color: ${props => props.primary ? '#999999' : '#FFFFFF'};
  background: ${props => props.primary ? 'none' : 'firebrick'};
  border: none;
  border-radius: 0.3rem;
  box-shadow: ${props => props.primary ? 'none' : '0 2px 5px 0 rgba(0,0,0,0.25)'};
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  &:hover {
  	background: ${props => props.primary ? 'red' : 'lightskyblue'};
  	color: white;
  }
`;

function Button() {
	return (
		<div>
			<MyButton>Button</MyButton>
			<MyButton primary default>Primary Button</MyButton>
		</div>
		
	)
}

export default Button;