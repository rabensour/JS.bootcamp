import React from 'react'

export default function AO1() {
    const object = {
        first_name: 'Bob',
        last_name: 'Dylan'
      };
    return (
        <>
        <h1> My Name is {object.first_name}  </h1>
        <h2> My last name is {object.last_name} </h2> 
        </>
    )
}
