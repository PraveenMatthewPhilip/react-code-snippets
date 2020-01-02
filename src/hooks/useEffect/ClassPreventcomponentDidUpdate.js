import React, { Component } from 'react';

class ClassPreventcomponentDidUpdate extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            text: ''
        }
    }
    componentDidMount(){
        console.log(`componentDidMount - ClassPreventcomponentDidUpdate.js`)
        document.title = "componentDidMount - Inital"
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.counter !== this.state.counter){
        console.log(`componentDidUpdate - ClassPreventcomponentDidUpdate.js`)
        document.title = `Title clicked ${this.state.counter} times.`
        }
    }
        render(){
            return(
            <div>
                Update document title to demonstrate effect of input in componentDidUpdate : <button onClick={ e => this.setState({counter: this.state.counter + 1})}>Update my state</button>
                <input onChange={ e => this.setState({text: e.target.value})} placeholder="Enter some text here."/>
            </div>)
        
    }
}

export default ClassPreventcomponentDidUpdate;