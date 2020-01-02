import React, { Component } from 'react';

class MouseMoveWithClass extends Component{

    constructor(props){
        super(props);
        this.state = {
            x:0,
            y: 0
        }
    }

    componentDidMount(){
        console.log("componentDidMount - MouseMoveWithClass.js");
        window.addEventListener("mousemove", this.mouseMoveListen)
    }

    componentWillUnmount(){
        window.removeEventListener("mousemove", this.mouseMoveListen);
    }

    mouseMoveListen  = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render(){
        return(
            <div>
            Using Class : X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default MouseMoveWithClass;