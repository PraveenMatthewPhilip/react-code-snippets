import React, { useState } from 'react';

const UseStateAndObjects = () => {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })
    const updateFirstName = (e) =>{
        setName({
            ...name,
            firstName: e.target.value
        })
    }
    const updateLastName = (e) => {
        setName({
            ...name,
            lastName: e.target.value
        })
    }
    return(
        <div>
            <input type="text" onChange={updateFirstName} value={name.firstName} placeholder="First Name" />
            <input type="text" onChange={updateLastName} value={name.lastName} placeholder="Last Name"/>
            <br />
            First Name: {name.firstName}
            Last Name: {name.lastName}
            <br />
            {JSON.stringify(name)}
        </div>
    )
}

export default UseStateAndObjects;