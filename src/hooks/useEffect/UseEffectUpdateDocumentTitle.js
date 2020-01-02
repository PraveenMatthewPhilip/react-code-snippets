import React, { useState, useEffect } from 'react';

const UseEffectUpdateDocumentTitle = () => {
    const [ counter, setCounter ] = useState(0);
    useEffect(() => {
        console.log(`useEffect - UseEffectUpdateDocumentTitle.js`)
        document.title = `Button clicked ${counter} time${counter !==  1 ?'s':''}.`
    });
    return(
        <div>Using useEffect to update document title : 
            <button onClick={()=> setCounter(counter + 1)}>Update document title</button>
        </div>
    );


}

export  default UseEffectUpdateDocumentTitle;