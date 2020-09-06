import React from 'react';

const Section = (props) => {
    const { icon, title, bg=""} = props;

    return (
        <div className={"section" + bg}>
            <div className="small-div">
                <i className={icon}></i>
            </div>
            <div className="big-div">
                <span className="div-title">{title}</span>
                <br></br>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>
            </div>
        </div>
    )
}
export default Section;