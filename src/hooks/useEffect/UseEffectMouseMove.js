import React, { useState, useEffect } from 'react';

const UseEffectMouseMove = () => {
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    
    const MouseMoveHandler = (e) =>{
        setX(e.clientX);
        setY(e.clientY);
    } 

    useEffect((e)=> 
    {
        console.log("useEffect - UseEffectMouseMove.js")
        window.addEventListener("mousemove", MouseMoveHandler);
        
        return () => {
            console.log("useEffect, unMount - UseEffectMouseMove.js");
            window.removeEventListener("mousemove", MouseMoveHandler);
        }
    }, []);

    return(
        <div>
            Using useEffect : X - {x}, Y - {y}
        </div>
    );
}

export default UseEffectMouseMove;