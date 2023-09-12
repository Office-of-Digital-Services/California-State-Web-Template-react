import React from 'react'

const IconMenu = ({ contentArr }) => (
  <nav id="navigation" className="main-navigation singlelevel justify-content-end">
    <ul id="nav_list" className="top-level-nav">
      {contentArr.map((item, idx) => (
        <li className="nav-item" role="presentation" key={`im-list-item${idx}`}>
          <a href={item.href} rel='noreferrer' target="_blank" className="first-level-link">
            <span className={item.icon} aria-hidden="true"></span>
            {item.navHeader}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default IconMenu