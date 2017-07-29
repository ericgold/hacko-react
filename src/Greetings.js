import React from 'react';

// UserGreeting component
function UserGreeting() {
	return <h1>Hello current user!</h1>
}

// GuestGreeting component
function GuestGreeting() {
	return <h1>Hello Guest!</h1>
}

// Greetings component
// Greetings has a prop called isUser type of Boolean
class Greetings extends React.Component {
	render() {
			/*
			if (this.props.isUser === true) {
				return <UserGreeting />
			}
			return <GuestGreeting />
			*/
			return (
				<div>
					{ this.props.isUser ? (
						<UserGreeting />
						) : (
						<GuestGreeting />
					)}
					
				</div>
			)
			
			
	}

}

export default Greetings