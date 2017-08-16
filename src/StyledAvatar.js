import React from 'react';
import styled from 'styled-components';

const MyAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: ${props => props.backgroundColor};
	color: white;
`;

function StyledAvatar(props) {
	return(
		<MyAvatar backgroundColor="firebrick">EG</MyAvatar>
	)
}

export default StyledAvatar;