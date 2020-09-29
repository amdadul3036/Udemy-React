import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <h1>I am a person of {Math.floor(Math.random()*30)} years old</h1>
            </div>
        );
    }
}

export default Person;