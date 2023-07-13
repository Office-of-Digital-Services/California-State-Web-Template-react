import React from 'react'

const IconCard = ({ bodyText, buttonHref, icon, titleText }) => (
  <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel h-100">
    <div className="text-center p-b">
      <span className={`${icon} color-p2 color-p2-hover text-huge d-block`} aria-hidden="true"></span>
      <a href={buttonHref} className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">{titleText}</a>
      <p className="color-gray-dark text-left">{bodyText}</p>
    </div>
  </article>
)

export default IconCard