import React from 'react';

// Accepts the celsius temperature as a prop,
// and prints whether it is enough to boil the water

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p style={{ color: 'firebrick ' }}>The water would boil. <span role="img" aria-label="3 fire emojis">🔥🔥🔥</span></p>
	}
	return <p style={{ color: 'darkblue' }}>The water would not boil. <span role="img" aria-label="3 water drop emojis">💦💦💦</span></p>
}

export default BoilingVerdict;