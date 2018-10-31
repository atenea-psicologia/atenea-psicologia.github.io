import React from 'react';
import { Component } from 'react';

export default class Button extends Component{

    render(){
        return (
            <button onClick={ () => alert("papa") }>click me</button>
        );
    }
}