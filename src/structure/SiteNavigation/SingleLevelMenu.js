import React from 'react'

const SingleLevelMenu = ({ contentArr }) => {
  return (
    <nav id="navigation" className="main-navigation singlelevel auto-highlight">
      <ul id="nav_list" className="top-level-nav">
        {contentArr.map((item, idx) => (
          <li className="nav-item" key={`slm-list-item${idx}`}>
            <a href={item.href} className="first-level-link">{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SingleLevelMenu