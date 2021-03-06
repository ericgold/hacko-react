import React from 'react';
import './login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errors: 
				{
					invalidUserName: 'Please enter a valid email address.',
					invalidPassword: 'Your password must be at least 6 characters.'
				} 
		};
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.checkInputs = this.checkInputs.bind(this);
		this.reset = this.reset.bind(this);

	}

	handleUsername(event) {
		const value = event.target.value;
		// run through validator
		// if true, set username
		this.setState({
			username: value
		})
		// if false, show error message
	}

	handlePassword(event) {
		const value = event.target.value;
		// run through validator
		// if true, set passwored
		this.setState({
			password: value
		})
		// if false, show error message
	}

	checkInputs() {
		if(this.state.username !== '' && this.state.password !== '') {
			return true;
		}
	}
	

	handleSubmit(event) {
		event.preventDefault();
		const check = this.checkInputs();
		if(check) {
			console.log('success');
		} else {
			console.log('fail');
		}
	}

	reset() {
		this.setState({
			username: '',
			password: ''
		})
	}


	render() {
		return (
			<div className="login">
				<h1>Login</h1>
				<form>
					<div>
						<input type="email" 
									 id="username"
									 placeholder="name@domain.com"
									 onChange={this.handleUsername}
									 required/>
						<label htmlFor="username">UserName</label>
					</div>
				
					<div>
						<input type="password" 
									 id="password"
									 placeholder="At least 6 characters"
									 minLength="6"
									 pattern="[0-9a-fA-F]{6,20}"
									 onChange={this.handlePassword}
									 required/>
						<label htmlFor="password">Password</label>
					</div>
					
					<div>
						<button type="reset" onClick={this.reset}>Reset</button>
						<button type="submit" onClick={this.handleSubmit}>Submit</button>
					</div>
					
				</form>
				
			</div>
			
		)
	}
}

export default Login;