import React from 'react';
import styled from 'styled-components';

const MyAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => props.size};
	width: ${props => props.size};
	border-radius: 50%;
	background-color: ${props => props.backgroundColor};
	color: ${props => props.textColor};
`;

function StyledAvatar(props) {
	return(
		<MyAvatar backgroundColor="firebrick" textColor="lightblue" size="50px">EG</MyAvatar>
	)
}

export default StyledAvatar;