import React from 'react'

const LinkGrid = ({ linkArr }) => {
  return (
    <div class="row">
      {linkArr.map(link => {
        return (
          <div class="col-md-4 mb-4">
            <a href={link.href} class="link-grid">{link.linkText}</a>
          </div>
        )
      })}
    </div>
  )
}

export default LinkGrid