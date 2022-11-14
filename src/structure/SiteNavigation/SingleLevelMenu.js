import React from 'react'

const SingleLevelMenu = ({ linkObjectArr }) => {
  return (
    <nav id="navigation" class="main-navigation singlelevel auto-highlight">
      <ul id="nav_list" class="top-level-nav">
        {linkObjectArr.map((link, idx) => (
          <li class="nav-item">
            <a href={link.href} class="first-level-link" key={`slm-list-item${idx}`}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SingleLevelMenu