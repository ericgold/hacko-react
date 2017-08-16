import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
	color: #FFFFFF;
  background: firebrick;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  &:hover {
  	background: lightSkyBlue;
  	color: white;
  }
`;

const MyPrimaryButton = MyButton.extend`
	box-shadow: none;
  background: none;
  color: #999999;
  &:hover {
  	background: red;
  }
`;

function Button() {
	return (
		<div>
			<MyButton>Button</MyButton>
			<MyPrimaryButton default>Primary Button</MyPrimaryButton>
		</div>
		
	)
}

export default Button;