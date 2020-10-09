import React, { Component, useState } from 'react';
import './App.css';
import Person from './Components/Person/Person';


const App = props => {
  const [personState , setPersonState] = useState({
    Persons: [
      {name: "Dhrubo" , age: 20},
      {name: "Dhruboish" , age: 21},
      {name: "Amdadul" , age: 19},
      {name: "Solimuddin" , age: 55}
    ], 
    otherState :'Some Other Value'
  })

  const switchEventHandler = () => {
    setPersonState ({
      Persons: [
        {name: "Dhrubo Number 1" , age: 20},
        {name: "Dhruboish Number 2" , age: 21},
        {name: "Amdadul Number 3" , age: 19},
        {name: "Solimuddin Number 4" , age: 55}
      ]
    })
  }

    return (
        <div className="App">
            <h1>Hi, I am Creating React App</h1>
            <h1>Is it work?</h1>
            <button onClick = {switchEventHandler}>Switch Name</button>
            <Person name = {personState.Persons[0].name} age = {personState.Persons[0].age}>He is a student</Person>
            <Person name = {personState.Persons[1].name} age = {personState.Persons[1].age} click = {switchEventHandler}>He is a Teacher</Person>
            <Person name = {personState.Persons[2].name} age = {personState.Persons[2].age}>He is a Coder</Person>
            <Person name = {personState.Persons[3].name} age = {personState.Persons[3].age}>He is a Businessman</Person>
        </div>
        
    );
  }


export default App;