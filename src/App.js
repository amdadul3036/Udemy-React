import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';


class App extends Component {
  render(){
    return (
        <div className="App">
            <h1>Hi, I am Creating React App</h1>
            <h1>Is it work?</h1>
            <Person></Person>
            <Person></Person>
            <Person></Person>
            <Person></Person>
        </div>
        
    );
  }
}

export default App;