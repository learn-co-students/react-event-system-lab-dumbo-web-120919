// Code EyesOnMe Component Here
import React, { Component} from 'react'

export default class EyesOnMe extends Component{
    //handle onFocus
    handleFocus = () => {
        console.log('Good!')
    }
    //handle blur
    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
        )
    }
}