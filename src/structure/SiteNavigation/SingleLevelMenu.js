import React from 'react'

const SingleLevelMenu = ({ linkObjectArr }) => {
  return (
    <nav id="navigation" className="main-navigation singlelevel auto-highlight">
      <ul id="nav_list" className="top-level-nav">
        {linkObjectArr.map((link, idx) => (
          <li className="nav-item" key={`slm-list-item${idx}`}>
            <a href={link.href} className="first-level-link">{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SingleLevelMenu