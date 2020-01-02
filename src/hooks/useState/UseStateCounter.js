import React, { useState } from 'react';

const UseStateCounter = () => {

    const [ counter, setCounter ] = useState(0);

     /* const onClick = () => {
        setCounter(counter+1)
    } */

    return(
        <div>
            Update state using componentDidUpdate,  componentDidMount
        <button onClick={() => setCounter(counter + 1)} >Counter with useState : {counter}</button>
        </div>
    )

}

export default UseStateCounter;
