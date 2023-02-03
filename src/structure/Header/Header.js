import React from 'react';
import Logo from './Ca-Gov-Logo-Gold.svg';
import SiteHeader from '../SiteHeader/SiteHeader';
import MobileControls from '../MobileControls/MobileControls';
import ActiveSearch from '../Search/ActiveSearch';
import SiteNavigation from '../SiteNavigation/SiteNavigation';

const Header = () => {
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

        <SiteHeader
          stateText={'State of California'}
          departmentText={'React Web Template'}
        />

        <MobileControls />

        <div className="navigation-search full-width-nav container">
          <div id="head-search" className="search-container featured-search">
            <ActiveSearch />
          </div>
          <SiteNavigation
            type={'dropdown'}
            contentArr={[
              { href: '/template-updates', navHeader: 'Template updates' },
              { href: '/get-started', navHeader: 'Get started' },
              { href: '/structure', navHeader: 'Structure' },
              {
                navHeader: 'Visual design',
                navBodyArr: [
                  { title: 'Color', href: '/visual-design/color' },
                  { title: 'Icons', href: '/visual-design/icons' },
                  { title: 'Typography', href: '/visual-design/typography' }
                ]
              },
              { href: '/components', navHeader: 'Components' },
              { href: '/patterns', navHeader: 'Patterns' }
            ]}
          />
        </div>
      </header>
    </>
  )
}

export default Header