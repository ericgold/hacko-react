import React from 'react';
import contacts from './contacts.json';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stateContacts: contacts,
			search: '',
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleChange(event) {
		this.setState({search: event.target.value});
	}

	handleSelect(event) {
		console.log(event);
		console.log(event.target.value);
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault();
		const filteredContacts = contacts.filter(contact => {
			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1;
		});
		this.setState({
			stateContacts: filteredContacts
		});
	}

	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<Form
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					handleSelect={this.handleSelect}
					value={this.state.search}
				/>
				
				<ul>
					{this.state.stateContacts.map(contact => {
							return <Contact key={contact.guid} contact={contact} />		
					})}
				</ul>
			</div>
		);
	}
}

function Contact(props) {
	return(
		<li >
			<p>Name: {props.contact.name}</p>
			<p>Phone: {props.contact.phone}</p>
			<p>Email: {props.contact.email}</p>
		</li>	
	)
}

function Form(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<input type="text"
						 value={props.search}
						 onChange={props.handleChange} />
			
			<select value={props.value} onChange={props.handleSelect}>
				<option value="name">Name</option>
				<option value="phone">Phone</option>
				<option value="email">Email</option>
			</select>

			<input type="submit" name="Search"/>
		</form>
	);
}




export default Contacts;