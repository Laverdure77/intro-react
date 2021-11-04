import React from 'react';
import './ListOfToDos.css';

function listOfToDos () {
    return (
        <div className= "listToDos">
            <h3>List of Todo's</h3>
        <ul>
            <input type="checkbox" />
            <li> First Element</li>
        </ul>
        </div>
    )
};

export default listOfToDos;
