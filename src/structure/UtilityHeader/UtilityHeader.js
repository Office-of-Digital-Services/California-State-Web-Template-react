import React from 'react';
import Logo from './Ca-Gov-Logo-Gold.svg';
import SiteLogo from '../SiteHeader/template-logo.png';
import FooterLogo from '../Footer/Ca-Gov-Logo-Gold.svg';
import './settings';

const UtilityHeader = () => {
  return (
    <>
      <header role={'banner'} id={'header'} className={'global-header fixed'}>
        <div id="skip-to-content">
          <a href="#main-content">Skip to Main Content</a>
        </div>
        <div className="utility-header">
          <div className="container">
            <div className="flex-row">
              <div className="social-media-links">
                <div className="header-cagov-logo"><a href="https://ca.gov"><span className="sr-only">CA.gov</span><img src={Logo} className="pos-rel" alt="" aria-hidden="true" /></a></div>
                <p className="official-tag"><span className="desktop-only">Official website of the</span> State of California</p>
              </div>
              <div className="settings-links">
                <button className="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#siteSettings" aria-expanded="false" aria-controls="siteSettings"><span className="ca-gov-icon-gear" aria-hidden="true"></span>Settings</button>
              </div>
            </div>
          </div>
        </div>

        <div className="site-settings section collapse collapsed" id="siteSettings">
          <div className="container p-y">

            <div className="settings-bar-buttons">

              <div className="btn-group" aria-label="contrastMode">
                <button type="button"
                  className="btn btn-default btn-lg bg-transparent bg-s1-hover disableHighContrastMode">Reset</button>
              </div>

              <div className="btn-group"><button type="button" className="btn btn-s1 btn-lg brd-s1 enableHighContrastMode">High
                contrast</button>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-s1 btn-lg brd-s1 increaseTextSize">
                  <span className="hidden-xs">Increase font size</span>
                  <span className="visible-xs">Font
                    <span className="sr-only">increase</span>
                    <span className="ca-gov-icon-plus-line small" aria-hidden="true"></span>
                  </span>
                </button>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-s1 btn-lg brd-s1 decreaseTextSize">
                  <span className="hidden-xs">Decrease font size</span>
                  <span className="visible-xs">Font <span className="sr-only">decrease</span>
                    <span className="ca-gov-icon-minus-line small" aria-hidden="true"></span>
                  </span>
                </button>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-s1 btn-lg brd-s1 dyslexicFont">Dyslexic font</button>
              </div>

              <button type="button" className="close ms-auto" data-bs-toggle="collapse" data-bs-target="#siteSettings"
                aria-label="Close">
                <span aria-hidden="true" className=" ca-gov-icon-close-mark"></span>
              </button>

            </div>
          </div>
        </div>

        <div className="section-default">
          <div className="branding">
            <div className="header-organization-banner">
              <a href="/">
                <div className="logo-assets">
                  <img src={SiteLogo} className="logo-img" alt="State Template Logo" />
                  <div className="logo-text">
                    <span className="logo-state">State of California</span>
                    <span className="logo-dept">Web Template</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mobile-controls">
          <span className="mobile-control-group mobile-header-icons">
          </span>
          <div className="mobile-control-group main-nav-icons">
            <button className="mobile-control toggle-search">
              <span className="ca-gov-icon-search hidden-print" aria-hidden="true"></span><span className="sr-only">Search</span>
            </button>
            <button id="nav-icon3" className="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation"
              data-bs-toggle="collapse" data-bs-target="#navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
        <div className="navigation-search full-width-nav container">
          <div id="head-search" className="search-container featured-search">
            <div className="container">
              <form id="Search" className="pos-rel" action="/serp.html">
                <span className="sr-only" id="SearchInput">Custom Google Search</span>
                <input type="text" name="q" aria-labelledby="SearchInput" placeholder="Search"
                  className="search-textfield" />
                <button type="submit" className="gsc-search-button"><span
                  className="ca-gov-icon-search" aria-hidden="true"></span><span
                    className="sr-only">Submit</span></button>
                <div className="close-search-btn"><button
                  className="close-search gsc-clear-button border-0 bg-transparent pos-rel"
                  type="reset"><span className="sr-only">Close</span></button></div>
              </form>
            </div>
          </div>

          <nav id="navigation" className="main-navigation dropdown">
            <ul id="nav_list" className="top-level-nav">
              <li className="nav-item">
                <a className="first-level-link" href="#main-content">Components</a>
              </li>
              <li className="nav-item">
                <a className="first-level-link" href="#patterns" >Patterns</a>
              </li>
              <li className="nav-item">
                <a className="first-level-link" href="#structure">Structure</a>
              </li>
              <li className="nav-item">
                <a className="first-level-link" href="#get-started">CSS Shorcuts</a>
              </li>
            </ul>
          </nav>

        </div>


      </header>

      {/* <aside className="p-b-md p-t-sm section-standout site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="h4 w-100 brd-bottom brd-highlight p-b">State Web Template</h3>
              <a href="/about.html" className="d-block no-underline m-y font-size-16">About</a>
              <a href="/contact-us.html" className="d-block no-underline m-y font-size-16">Contact us</a>
            </div>
            <div className="col-md-4">
              <h3 className="h4 w-100 brd-bottom  brd-highlight p-b">Related websites</h3>
              <a href="https://webstandards.ca.gov" className="d-block no-underline m-y font-size-16">State Web Standards</a>
              <a href="https://designsystem.webstandards.ca.gov" className="d-block no-underline m-y font-size-16">California Design
                System</a>
              <a href="https://github.com/Office-of-Digital-Services/California-State-Web-Template-Website"
                className="d-block no-underline m-y font-size-16">State Web Template GitHub</a>
            </div>
            <div className="col-md-4">
              <h3 className="h4 w-100 brd-bottom brd-highlight p-b">Resources</h3>
              <a href="https://designsystem.webstandards.ca.gov/style/content"
                className="d-block no-underline m-y font-size-16">Content style
                guide</a>
              <a href="https://designsystem.webstandards.ca.gov/style/design" className="d-block no-underline m-y font-size-16">Design
                style
                guide</a>
              <a href="https://designsystem.webstandards.ca.gov/why-web-components"
                className="d-block no-underline m-y font-size-16">Why web
                components</a>
            </div>
          </div>
        </div>
      </aside>
      <footer id="footer" className="global-footer">
        <button className="return-top"><span className="sr-only">Back to top</span></button>
        <div className="container">
          <div className="d-flex">
            <a href="https://ca.gov" className="cagov-logo" target="_blank">
              <img src={FooterLogo} alt="CA.gov logo" />
            </a>

            <ul className="footer-links">
              <li><a href="/conditions-of-use.html">Conditions of use</a></li>
              <li><a href="/privacy-policy.html">Privacy policy</a></li>
              <li><a href="/images/WebAccessibilityCert-beta.template.webstandards.ca.gov.pdf" aria-label="Accessibility Certification">Accessibility</a></li>
              <li><a href="/sitemap.html">Sitemap</a></li>

            </ul>

            <ul className="socialsharer-container">
              <li><a href="https://github.com/Office-of-Digital-Innovation/California-State-Web-Template"><span className="ca-gov-icon-github"
                aria-hidden="true"></span><span className="sr-only">GitHub</span></a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-right">
            Copyright &copy;
            <span id="thisyear">
              <script>document.getElementById('thisyear').appendChild(document.createTextNode(new Date().getFullYear()))</script>
            </span> State of California
          </div>
        </div>
      </footer> */}

    </>
  )
}

export default UtilityHeader