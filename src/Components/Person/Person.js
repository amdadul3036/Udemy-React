import React from 'react';

const Person = (props) => {
    return (
        <div>
            <div>
                <h1>I am {props.name} and I am {props.age} years old</h1>
            </div>
        </div>
    );
};

export default Person;