import React from 'react';

const Person = (props) => {
    return (
        <div>
            <div>
                <h1 onClick = {props.click}>I am {props.name} and I am {props.age} years old</h1>
                <h3>{props.children}</h3>
            </div>
        </div>
    );
};

export default Person;