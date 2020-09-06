import React from 'react'

export default function AO6() {

    const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];

    const list3 = 
    <ul className="list-group">
        {animals.map((item) => <li className="list-group-item">{item}</li>)}
    </ul>

    return list3;
}
