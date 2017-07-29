import React from 'react';
import './login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errors: []
		};
	}

	render() {
		return (
			<div className="login">
				<h1>Login</h1>
				<form>
					<label htmlFor="username"><input type="text" id="username"/>UserName</label>
					<label htmlFor="password"><input type="password" id="password"/>Password</label>
					<button type="reset">Reset</button>
					<button type="submit">Submit</button>
				</form>
				
			</div>
			
		)
	}
}

export default Login;