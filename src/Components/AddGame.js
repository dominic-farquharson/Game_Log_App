import React, {Component} from 'react';
import Header from './Header';
import Input from './Input';

// Add Game Functionial Component
/*
Will perform a post request.

*/
let AddGame = (props) => {

    return (
        <div>
            <Header title="Add Game"/>
            <Input />
        </div>
    )

}

export default AddGame;
