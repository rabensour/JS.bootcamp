import React from 'react'

export default function AO3() {  
    
    const navLinkItems = [
        <li className="nav-item">
            <a className="nav-link" href="https://www.google.com/">Link to Google</a>
        </li>,
        <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/">Link to Facebook</a>
        </li>,
        <li className="nav-item">
            <a className="nav-link" href="https://www.amazon.com/">Link to Amazon</a>
        </li>
    ]

    const list = 
        <ul>
            {navLinkItems.map(li => li)}
        </ul>

    return list;
}
