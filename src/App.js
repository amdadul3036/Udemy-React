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
            <Person name = "Dhrubo" age = "20"></Person>
            <Person name = "Dhruboish" age = "21"></Person>
            <Person name = "Amdadul" age = "19"></Person>
            <Person name = "Solimuddin" age = "55"></Person>
        </div>
        
    );
  }
}

export default App;