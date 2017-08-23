import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import generated from './generated.json';
//import ContactInformation from './ContactInformation';

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
const ContactInformation = ({match}) => {
	return (
		<div>
			<img src={match.params.picture} alt=""/>
			<p>Name: {match.params.name}</p>
			<p>Email: {match.params.email}</p>
			<p>Phone: {match.params.phone}</p>
			<p>Address: {match.params.address}</p>
		</div>
	)
}


const ContactList = generated.map((contact) => {
	return <Route 
						/*guid={contact.guid}*/
						path={"/" + contact.guid}
						component={ContactInformation}
						picture={contact.picture}
						name={contact.name}
						email={contact.email}
						phone={contact.phone}
						address={contact.address}
					/>
});



export default function ContactListApp(props) {
	return (
		<BrowserRouter>
			<div>
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