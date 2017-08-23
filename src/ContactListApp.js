import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import generated from './generated.json';
import './ContactListApp.css';

const linkStyle = { color: 'red' };

/*map over generated and create a NavLink for each one with to= the name*/
const Links = generated.map((contact) => 	{
	return <NavLink 
						activeStyle={linkStyle} 
						to={contact.guid}
				 >
				 {contact.name}
				 </NavLink>
});
/*	
<NavLink exact activeStyle={linkStyle} to="/">Home</NavLink>
*/
const ContactInformation = (props) => {
	return (
		<div className="contact-card">
			<img src={props.contact.picture} alt=""/>
			<p>Name: {props.contact.name}</p>
			<p>Email: {props.contact.email}</p>
			<p>Phone: {props.contact.phone}</p>
			<p>Address: {props.contact.address}</p>
		</div>
	)
}


const ContactList = generated.map((contact) => {
	return <Route 
						/*guid={contact.guid}*/
						path={"/" + contact.guid}
						/*component={ContactInformation}*/
						render={() => 
							<ContactInformation 
								contact={contact}
							/>
						}
						
					/>
});



export default function ContactListApp(props) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<nav>
					{Links} 
				</nav>
      	<main>
	      	<Switch>
	      		
	      		<Route exact path="/" component={Home} />
	      		
	      		{/*map over generated and create a Route for each one
							 with path= the guid and component= a Contact component
							 with props from that guid: picture, name, email, etc.
	      		*/}
	      		{ContactList}
	      		
	      		<Route render={() => <h1>Not found</h1>} />
	      	</Switch>
      	</main>
			</div>
			
    </BrowserRouter>
	)
}





const Home = () => <h1>Home page</h1>