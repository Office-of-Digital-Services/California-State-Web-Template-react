import React from 'react';

const Megamenu = ({ contentArr }) => (
  <nav id="navigation" className="main-navigation megadropdown auto-highlight">
    <ul id="nav_list" className="top-level-nav">

      {contentArr.map((item, idx) => (

        <li className="nav-item" key={`mm-nav-item${idx}`} role={'presentation'}>
          <a href='/' className="first-level-link">Getting Started</a>

          <div className="sub-nav">

            {item.hasBorder ?
              <div className="second-level-nav flex with-border">
                {item.navBodyArr.map((navItem, navIdx) => (
                  <a href={navItem.href} className="second-level-link" key={`mm-nav-item${navIdx}`}>
                    <span className={navItem.icon} aria-hidden="true"></span>
                    {navItem.title}
                    <div className="link-description">{navItem.body}</div>
                  </a>
                ))}
              </div>
              :
              <div className="second-level-nav flex">
                {item.navBodyArr.map((navItem, navIdx) => (
                  <a href={navItem.href} className="second-level-link" key={`mm-nav-item${navIdx}`}>
                    <span className={`${navItem.icon} font-size-40`} aria-hidden="false"></span>
                    <p className="h3 sub-nav-link">{navItem.title}</p>
                    <p className="link-description">{navItem.body}</p>
                  </a>
                ))}
              </div>
            }
          </div>
        </li>
      ))}

    </ul>
  </nav>
)

export default Megamenu