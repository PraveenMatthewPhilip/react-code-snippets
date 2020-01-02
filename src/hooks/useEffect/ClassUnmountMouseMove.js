import React, { Component } from 'react';
import MouseMoveWithClass from './MouseMoveWithClass';

class ClassUnmountMouseMove extends Component{

    state = {
        display:true
    }
    toggleButton = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render(){
    return(
        <div>
            componentDidUnmount : 
            <button onClick={this.toggleButton}>Toggle</button>
            {this.state.display && <MouseMoveWithClass />}
        </div>
    );
}
}

export default ClassUnmountMouseMove;