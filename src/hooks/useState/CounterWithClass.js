import React, {Component} from 'react';

class ClassCounter extends Component {

    state = {
        counter: 0
    }

    onClick = (e) =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){

    return(<button onClick={this.onClick}>Counter with Class : {this.state.counter}</button>)

    }
}

export default ClassCounter;