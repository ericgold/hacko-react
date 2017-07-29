import React from 'react';
import './Menu.css';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.update = this.update.bind(this);
	}
	update() {
		this.state.open === false ?
		this.setState({open: true}) : 
		this.setState({open: false});
	}
	render() {

		return(
			<div onClick={this.update}>
				{this.state.open === true ? (
				<div className="menubar">
					<button>Option 1</button>
					<button>Option 2</button>
					<button>Option 3</button>
				</div>
				) : (
				<div className="hamburger">=</div>
				)}
			</div>	
		)
	}
}

export default Menu;