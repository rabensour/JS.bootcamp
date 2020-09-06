import React from 'react'

export default function AO5() {

    const animals = [ 
        { label: 'Horse' }, 
        { label: 'Turtle' }, 
        { label: 'Elephan' }, 
        { label: 'Monkey' } 
    ];

    const list2 = 
        <ul>
            {animals.map((item) => <li>{item.label}</li>)}
        </ul>

    return list2;
}
