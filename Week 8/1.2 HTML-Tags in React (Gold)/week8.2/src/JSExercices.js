import React from 'react'

const Exercices = () => {
    const myStyle = {
        "color":"white",
        "background-color" : "DodgerBlue",
        "padding" : "10px",
        "font-family": "Arial"
    }

    const mySuperStyles = {
        "color" : "yellow",
        "font-size": "16px",
        "font-weight":"bold",
        "border" : "1px solid yellow",
        "background-color":"black",
        "padding" : "5px",
        "border radius" : "8px", 
        "cursor" : "pointer",
        "margin" : "10px"
    }

    const func = () => {
        console.log(1234578);
    }

    return (
        <>
            <h2 className ="HS" style={myStyle}> Hello Style! </h2>
            <button className ="MS" style={mySuperStyles} type="button" onClick={func}> I'm a stylish button</button>
        </>

    )
}

export default Exercices;