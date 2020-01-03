import React, { Component } from 'react';

class ClassSetInterval extends Component{

    state = {
        counter: 0
    }

    tick = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount(){
        console.log("componentDidMount - ClassSetInterval.js")
        this.interval = setInterval(this.tick, 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>{this.state.counter}</div>
        )
    }
}

export default ClassSetInterval;
