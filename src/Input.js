import React from 'react';
import './Input.css';

function Input () {

    return(
        <div className="InputField">
            <form>
            <label for="todo">New Todo: </label>
            <input type="text" id="todo" placeholder="Type a new ToDo" />
            </form>
            <button className="btn"> Add ToDo</button>

        </div>

    )
};
export default Input;

