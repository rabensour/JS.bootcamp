import React from 'react'

const BootstrapCard2 = (props) => {
    const {title, imageUrl, buttonUrl, description} = props;

    return (
        <div className="card m-5" style={{width: '30rem'}}>
        <img className="card-img-top" src={imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href= {buttonUrl} className="btn btn-primary">Go to wikipedia</a>
        </div>
      </div>
    )
  }

  export default BootstrapCard2


