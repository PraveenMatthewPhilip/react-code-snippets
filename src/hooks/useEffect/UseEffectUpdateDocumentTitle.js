import React, { useState, useEffect } from 'react';

const UseEffectUpdateDocumentTitle = () => {
    const [ counter, setCounter ] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
        console.log(`useEffect - UseEffectUpdateDocumentTitle.js`)
        document.title = `Button clicked ${counter} time${counter !==  1 ?'s':''}.`
    }, [counter]);
    return(
        <div>Using useEffect to update document title : 
<button onClick={()=> setCounter(counter + 1)}>Update document title - {text}</button>
            <input onChange={ e => setText(e.target.value)} placeholder="Enter a text ...."/>
        </div>
    );


}

export  default UseEffectUpdateDocumentTitle;