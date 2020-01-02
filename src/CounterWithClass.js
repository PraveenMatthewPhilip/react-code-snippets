import React, {Component} from 'react';

class CounterWithClass extends Component {

    state = {
        counter: 0
    }

    onClick = (e) =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){

    return(<button onClick={this.onClick}>Counter: {this.state.counter}</button>)

    }
}

export default CounterWithClass;