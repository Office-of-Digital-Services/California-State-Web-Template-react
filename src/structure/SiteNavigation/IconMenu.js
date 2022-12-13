import React from 'react'

const IconMenu = () => {
  return (
    <nav id="navigation" className="main-navigation singlelevel justify-content-end">
      <ul id="nav_list" className="top-level-nav">
        <li className="nav-item">
          <a href="#" target="_blank" className="first-level-link"><span className="ca-gov-icon-ca-state"
            aria-hidden="true"></span>Link
            1</a>
        </li>
        <li className="nav-item">
          <a href="#" className="first-level-link"><span className="ca-gov-icon-ca-capitol" aria-hidden="true"></span>link 2</a>
        </li>
        <li className="nav-item" id='nav-item-search'>
          <button className="first-level-link"><span className="ca-gov-icon-search" aria-hidden="true"></span>Search</button>
        </li>
      </ul>
    </nav>
  )
}

export default IconMenu