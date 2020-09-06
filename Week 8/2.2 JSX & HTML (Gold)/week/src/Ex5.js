import React from 'react'

const Jumbotron= (props) => {
    const {title, description, buttonLabel, buttonURL} = props;

    return (
    <div className="jumbotron m-5">
        <h1 className="display-4">{title}</h1>
        <p className="lead"><b>{description}</b></p>
        <a className="btn btn-primary btn-lg" href={buttonURL} role="button">{buttonLabel}</a>
        </div>
    )
}

export default Jumbotron