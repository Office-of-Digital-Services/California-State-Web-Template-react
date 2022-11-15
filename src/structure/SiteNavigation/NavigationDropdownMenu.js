import React from 'react'

const NavigationDropdownMenu = () => {
  return (
    <nav id="navigation" className="main-navigation dropdown">
      <ul id="nav_list" className="top-level-nav">

        <li className="nav-item">
          <a href="/getting-started.html" className="first-level-link">Getting Started</a>
          <div className="sub-nav">

            <ul className="second-level-nav">
              <li className="unit1">
                <a href="/getting-started.html" className="second-level-link">Getting Started</a>
              </li>
              <li className="unit1">
                <a href="/updates.html" className="second-level-link">Update</a>
              </li>
              <li className="unit1">
                <a href="/cdn.html" className="second-level-link">CDN</a>
              </li>
              <li className="unit1">
                <a href="/structure.html" className="second-level-link">Structure</a>
              </li>
              <li className="unit1">
                <a href="/https://github.com/Office-of-Digital-Innovation/California-State-Template" className="second-level-link"
                  target="_blank">Download</a>
              </li>
            </ul>

          </div>
        </li>


        <li className="nav-item">
          <a href="/visual-design.html" className="first-level-link">Visual Design</a>
          <div className="sub-nav">

            <ul className="second-level-nav">
              <li className="unit1">
                <a href="/visual-design/typography.html" className="second-level-link">Typography</a>
              </li>
              <li className="unit1">
                <a href="/visual-design/color-schemes.html" className="second-level-link">Color Schemes</a>
              </li>
              <li className="unit1">
                <a href="/visual-design/icon-fonts.html" className="second-level-link">Icons</a>
              </li>
            </ul>
          </div>
        </li>


        <li className="nav-item">
          <a href="/" className="first-level-link">Components</a>
          <div className="sub-nav">

            <ul className="second-level-nav">
              <li className="unit1">
                <a href="/components.html" className="second-level-link">Components</a>
              </li>
              <li className="unit1">
                <a href="/structure/site-navigation.html" className="second-level-link">Navigation</a>
              </li>
              <li className="unit1">
                <a href="/css-shortcuts/css-units.html" className="second-level-link">CSS shortcuts</a>
              </li>
            </ul>
          </div>
        </li>


        <li className="nav-item">
          <a href="/patterns.html" className="first-level-link">Patterns</a>
          <div className="sub-nav">
            <ul className="second-level-nav">
              <li className="unit1">
                <a href="/patterns.html" className="second-level-link"><span className="ca-gov-icon-apps"
                  aria-hidden="true"></span>Content patterns</a>
              </li>
              <li className="unit1">
                <a href="/structure/layouts.html" className="second-level-link"><span className="ca-gov-icon-desktop-checklist"
                  aria-hidden="true"></span>Page layouts</a>
              </li>
            </ul>
          </div>
        </li>



        <li className="nav-item">
          <a href="/about.html" className="first-level-link">About</a>
          <div className="sub-nav">
            <ul className="second-level-nav">
              <li className="unit1">
                <a href="/about.html" className="second-level-link"><span className="ca-gov-icon-thumb-up"
                  aria-hidden="true"></span>About</a>
              </li>
              <li className="unit1">
                <a href="https://webstandards.ca.gov/" className="second-level-link"><span className="ca-gov-icon-gear"
                  aria-hidden="true"></span>Web Standards</a>
              </li>
            </ul>
          </div>
        </li>

      </ul>
    </nav>
  )
}

export default NavigationDropdownMenu