import React, { Component } from 'react';

class ClassPreventcomponentDidUpdate extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
        render(){
            return(<button onClick={ e => this.setState({counter: this.state.counter + 1})}>Update my state</button>)
        
    }
}

export default ClassPreventcomponentDidUpdate;