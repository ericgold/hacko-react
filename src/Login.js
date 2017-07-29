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
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.checkInputs = this.checkInputs.bind(this);
		this.reset = this.reset.bind(this);

	}

	handleUsername(event) {
		//const field = event.target.id;
		const value = event.target.value;
		
		this.setState({
			username: value
		})
	}

	handlePassword(event) {
		const value = event.target.value;
		this.setState({
			password: value
		})
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
						<label htmlFor="username">UserName</label>
						<input type="text" 
									 id="username"
									 onChange={this.handleUsername}/>
					</div>
				
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" 
									 id="password"
									 onChange={this.handlePassword}/>
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