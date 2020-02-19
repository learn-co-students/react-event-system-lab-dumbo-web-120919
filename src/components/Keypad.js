import React, { Component } from 'react'

export default class Keypad extends Component {


    type = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.type}/>
            </div>
        )
    }
}
// Code Keypad Component Here
