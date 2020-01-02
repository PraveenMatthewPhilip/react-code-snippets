import React, { useState } from 'react';

const UseStateCounter = () => {

    const [ counter, setCounter ] = useState(0);

     /* const onClick = () => {
        setCounter(counter+1)
    } */

    return(
        <button onClick={() => setCounter(counter + 1)} >Counter with useState : {counter}</button>
    )

}

export default UseStateCounter;