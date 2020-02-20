// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

    onFocus = () => {
        console.log('Good!')
    }

    onBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button 
                onFocus={this.onFocus} 
                onBlur={this.onBlur}
                >
                Hey! Eyes on me!
                </button>
            
            </div>
        )
    }
}

export default EyesOnMe