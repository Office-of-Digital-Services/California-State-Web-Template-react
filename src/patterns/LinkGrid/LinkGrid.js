import React from 'react'

const LinkGrid = ({ linkArr }) => {
  return (
    <div className="row">
      {linkArr.map(link => {
        return (
          <div className="col-md-4 mb-4">
            <a href={link.href} className="link-grid">{link.linkText}</a>
          </div>
        )
      })}
    </div>
  )
}

export default LinkGrid