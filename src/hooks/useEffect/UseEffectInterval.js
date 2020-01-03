import React, { useEffect, useState } from 'react';

const UseEffectInterval = () => {

    const [ counter, setCounter] = useState(0);

    const tick = () => {
        setCounter(prevCount => prevCount + 1);
    }

    useEffect(() => {
        console.log("useEffect - UseEffectInterval.js")
        const interval = setInterval(
            tick, 1000
        );
        return () => {
            clearInterval(interval);
        }
    },[])

    return(
        <div>{counter}</div>
    );
}

export default UseEffectInterval;
