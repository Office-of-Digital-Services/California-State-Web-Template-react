import React from 'react'

const DefaultCard = ({ bodyText, buttonHref, buttonText, titleText }) => (
  <div className="card h-100">
    <div className="card-body bg-gray-50 h-100">
      <h3 className="h4 m-y-sm">{titleText}</h3>
      <p className="m-b">{bodyText}</p>
      <a className="btn btn-primary p-x-md" href={buttonHref}>{buttonText} <span className="sr-only">with link related to card title</span></a>
    </div>
  </div>
)

export default DefaultCard