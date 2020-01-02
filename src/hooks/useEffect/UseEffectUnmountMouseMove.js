import React, { useState } from 'react';
import UseEffectMouseMove from './UseEffectMouseMove';

const UseEffectUnmountMouseMove = () => {
    const [ display, setDisplay ] = useState(true);
    return(
        <div> UseEffectUnMount : 
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <UseEffectMouseMove />}
        </div>
    )
}
export default UseEffectUnmountMouseMove;