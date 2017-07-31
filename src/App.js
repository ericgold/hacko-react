import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Goodbye from './Goodbye';
//import Clock from './Clock';
//import Grandparent from './Grandparent';
//import Greetings from './Greetings';
//import Menu from './Menu';
//import ColorPicker from './ColorPicker';
import Contacts from './Contacts';
//import TodoList from './TodoList';
//import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Contacts />
      </div>
      
    );
  }
}

export default App;
