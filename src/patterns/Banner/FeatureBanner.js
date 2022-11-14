import React from 'react'

const FeatureBanner = ({ titleText, bodyText, buttonText, imageSrc }) => {
  return (
    <div className="container">
      <div className="row bg-gray-100">
        <div className="col-md-6 col-lg-4 p-a-md order-2 order-md-1">
          <h2 className="h3 m-t-0">{titleText}</h2>
          <p>{bodyText}</p>
          <a href="#" className="btn btn-primary m-y-md">{buttonText}<span className="sr-only">(feature)</span></a>
        </div>
        <div className="col-lg-8 col-md-6 p-0 text-right order-1 order-md-2 d-flex justify-content-center">
          <a href="#" className="feature-img" style={{ background: `url(${imageSrc})` }} aria-label="Feature card example image">
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeatureBanner