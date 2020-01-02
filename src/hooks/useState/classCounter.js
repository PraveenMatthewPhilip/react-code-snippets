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

    incrementBy5 = () =>{
        for(let i = 0 ; i < 5; ++i){
            this.setState(
                prevState => {
                    return {
                        counter: prevState.counter + 1
                    }
                
            })
        }
    }

    render(){
    return(
    <div>
        Counter with Class : {this.state.counter}
    <button onClick={this.onClick}>Increment</button>
    <button onClick={this.incrementBy5}>Increment by 5</button>
    </div>);
    }
}

export default ClassCounter;