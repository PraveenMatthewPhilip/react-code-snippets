import React, { useState } from 'react';

const UseStateAndArrays = () =>{

    const [ items, setItems ] = useState([])

    const AddItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    return(
        <div>
            <button onClick={AddItem}>Add item to state array</button>
            <ul>{items.map(item => <li key={item.div}>{item.value}</li>)}</ul>
        </div>
    )
}

export default UseStateAndArrays;