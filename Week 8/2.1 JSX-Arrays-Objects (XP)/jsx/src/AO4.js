import React from 'react'

export default function AO4() {

    const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];

    const list2 = 
    <ul>
        {animals.map((item) => <li>{item}</li>)}
    </ul>

    return list2;
}
