import React, { useState } from 'react'

const HookCounterWithPreviousState = () =>{

    const [counter, setCounter] = useState(0);
    const incrementBy5 = () => {
        for(let i=0; i< 5; i++){
            //setCounter(counter + 1)
            setCounter(prevState => prevState + 1)
        }
    }
    return(
        <div>
            Counter with useState : {counter}
            <button onClick={()=> setCounter(0)}>Reset</button>
            <button onClick={()=> setCounter(prevState =>  prevState + 1)}>Increment</button>
            <button onClick={()=> setCounter(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementBy5}>Increment by 5</button>
        </div>
    )
}

export default HookCounterWithPreviousState;