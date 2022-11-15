import React from 'react'

const Megamenu = () => {
  return (
    <nav id="navigation" className="main-navigation megadropdown auto-highlight">
      <ul id="nav_list" className="top-level-nav">
        <li className="nav-item">
          <a className="first-level-link">Getting Started</a>
          <div className="sub-nav">
            <div className="second-level-nav flex">
              <a href="/getting-started.html" className="second-level-link">
                <span className="ca-gov-icon-online-services font-size-40" aria-hidden="true"></span>
                <p className="h3 sub-nav-link">Getting Started
                  <span className="sr-only">page</span>
                </p>
                <p className="link-description">How to apply California State Template css, js and ssi</p>
              </a>
              <a href="/updates.html" className="second-level-link">
                <span className="ca-gov-icon-file-check font-size-40" aria-hidden="true"></span>
                <p className="h3 sub-nav-link">Update</p>
                <p className="link-description">Update your State Template to most current version</p>
              </a>
              <a href="/cdn.html" className="second-level-link">
                <span className="ca-gov-icon-globe font-size-40" aria-hidden="true"></span>
                <p className="h3 sub-nav-link">CDN</p>
                <p className="link-description">Load your website faster by using State Template CDN</p>
              </a>
            </div>
            <div className="second-level-nav flex with-border">

              <a href="/structure.html" className="second-level-link">
                <span className="ca-gov-icon-flowchart" aria-hidden="true"></span>Structure
                <div className="link-description">Find out more about State Template structure</div>
              </a>
              <a href="https://github.com/Office-of-Digital-Innovation/California-State-Template-v5" className="second-level-link"
                target="_blank">
                <span className="ca-gov-icon-download-cloud" aria-hidden="true"></span>Download
                <div className="link-description">Download or clone State Template on GitHub
                </div>
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a href="/visual-design.html" className="first-level-link">Visual Desing</a>
          <div className="sub-nav">
            <div className="second-level-nav flex">
              <a href="/visual-design/typography.html" className="second-level-link">
                <img className="image-icon rounded-50x m-b-md" src="/images/type.png" alt="Typography Icon" />
                <p className="h3 sub-nav-link">Typography</p>
              </a>
              <a href="/visual-design/color-schemes.html" className="second-level-link">
                <img className="image-icon rounded-50x m-b-md" src="/images/color.png" alt="Color Schemes Icon" />
                <p className="h3 sub-nav-link">Color Schemes</p>
              </a>
              <a href="/visual-design/icon-fonts.html" className="second-level-link">
                <img className="image-icon rounded-50x m-b-md" src="/images/icons.png" alt="Bear Icon" />
                <p className="h3 sub-nav-link">Icons</p>
              </a>
            </div>

          </div>
        </li>
        <li className="nav-item">
          <a href="/components.html" className="first-level-link">Components</a>
          <div className="sub-nav">
            <div className="second-level-nav flex">
              <a href="/structure/site-navigation.html" className="second-level-link">
                <img className="image-icon rounded-50x m-b-md" src="/images/sample/images/03.png" alt="Navigation Icon" />
                <p className="h3 sub-nav-link">Navigation Samples</p>
                <p className="link-description">Main navigation types and variations examples</p>
              </a>
              <a href="/components.html" className="second-level-link">
                <img className="image-icon rounded-50x m-b-md" src="/images/sample/images/features-icon.png" alt="Components Icon" />
                <p className="h3 sub-nav-link">Components</p>
                <p className="link-description">Working web components examples with their documentation
                </p>
              </a>
              <a href="/css-shortcuts/shortcuts.html" className="second-level-link">
                <img className="image-icon rounded-50x m-b-md" src="/images/sample/images/css-icon.png" alt="CSS Icon" />
                <p className="h3 sub-nav-link">CSS Shortcuts</p>
                <p className="link-description">State Template's custom css classes shortcuts list</p>
              </a>
            </div>

          </div>
        </li>

        <li className="nav-item">
          <a href="/patterns.html" className="first-level-link">Patterns</a>
          <div className="sub-nav">
            <div className="second-level-nav flex">
              <a href="/" className="second-level-link">
                <span className="ca-gov-icon-home" aria-hidden="true"></span>
                <span className="h4">Homepage</span>
                <div className="link-description">Home page layout
                </div>
              </a>
              <a href="/structure/layout-page.html" className="second-level-link">
                <span className="ca-gov-icon-loud-grid" aria-hidden="true"></span>
                <span className="h4">Layouts</span>
                <div className="link-description">Page layouts options
                </div>
              </a>
              <a href="//serp.html?q=components" className="second-level-link" target="_blank">
                <span className="ca-gov-icon-searching" aria-hidden="true"></span>
                <span className="h4">Search Results</span>
                <div className="link-description">Search directory sample page</div>
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a href="/about.html" className="first-level-link">About</a>
          <div className="sub-nav">
            <div className="second-level-nav flex with-border">
              <a href="/about.html" className="second-level-link">
                <div className="media-left">
                  <img className="media-object width-80 height-80" src="/sample/images/02.png" alt="About icon" />
                </div>
                <div className="media-body">
                  <div className="title text-left">About State Template</div>
                  <div className="teaser link-description text-left">California State Template overview</div>
                </div>
              </a>
              <a href="https://webstandards.ca.gov/" className="second-level-link" target="_blank">
                <div className="media-left">
                  <img className="media-object width-80 height-80" src="/sample/images/01.png" alt="Web Standards icon" />
                </div>
                <div className="media-body">
                  <div className="title text-left">Web Standards</div>
                  <div className="teaser link-description text-left">Web Standards and Design System for
                    California Government</div>
                </div>
              </a>

            </div>

          </div>
        </li>

      </ul>
    </nav>
  )
}

export default Megamenu