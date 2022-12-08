import React from 'react';
import Logo from './Ca-Gov-Logo-Gold.svg';
import SiteHeader from '../SiteHeader/SiteHeader';
import MobileControls from '../MobileControls/MobileControls';
import ActiveSearch from '../Search/ActiveSearch';
// import SingleLevelMenu from '../SiteNavigation/SingleLevelMenu';
import SiteNavigation from '../SiteNavigation/SiteNavigation';
// import NavigationDropdownMenu from '../SiteNavigation/NavigationDropdownMenu';
// import Megamenu from '../SiteNavigation/Megamenu';
// import IconMenu from '../SiteNavigation/IconMenu';

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
          departmentText={'Web Template'}
        />

        <MobileControls />

        <div className="navigation-search full-width-nav container">
          {/* <IconMenu /> */}
          <div id="head-search" className="search-container featured-search">
            <ActiveSearch />
          </div>
          {/* <Megamenu
            contentArr={[
              {
                hasBorder: false,
                navHeader: 'Testing',
                navBodyArr: [
                  { title: 'Site 1', href: 'www.google.com', body: 'Test body', icon: 'ca-gov-icon-online-services' },
                  { title: 'Site 2', href: 'www.google.com', body: 'Test body', icon: 'ca-gov-icon-online-services' },
                  { title: 'Site 3', href: 'www.google.com', body: 'Test body', icon: 'ca-gov-icon-online-services' }
                ]
              },
              {
                hasBorder: true,
                navHeader: 'Testing',
                navBodyArr: [
                  { title: 'Site 1', href: 'www.google.com', body: 'Test body', icon: 'ca-gov-icon-online-services' },
                  { title: 'Site 2', href: 'www.google.com', body: 'Test body', icon: 'ca-gov-icon-online-services' },
                  { title: 'Site 3', href: 'www.google.com', body: 'Test body', icon: 'ca-gov-icon-online-services' }
                ]
              }
            ]}
          /> */}
          {/* <NavigationDropdownMenu
            contentArr={[
              {
                navHeader: 'Testing',
                navBodyArr: [
                  { title: 'Site 1', href: 'www.google.com' },
                  { title: 'Site 2', href: 'www.google.com' },
                  { title: 'Site 3', href: 'www.google.com' }
                ]
              },
              {
                navHeader: 'Testing 2',
                navBodyArr: [
                  { title: 'Site 2-1', href: 'www.google.com' },
                  { title: 'Site 2-2', href: 'www.google.com' },
                  { title: 'Site 2-3', href: 'www.google.com' }
                ]
              }
            ]}
          /> */}
          {/* <SiteNavigation
            type={'dropdown'}
            contentArr={[
              {
                navHeader: 'Testing',
                navBodyArr: [
                  { title: 'Site 1', href: 'www.google.com' },
                  { title: 'Site 2', href: 'www.google.com' },
                  { title: 'Site 3', href: 'www.google.com' }
                ]
              },
              {
                navHeader: 'Testing 2',
                navBodyArr: [
                  { title: 'Site 2-1', href: 'www.google.com' },
                  { title: 'Site 2-2', href: 'www.google.com' },
                  { title: 'Site 2-3', href: 'www.google.com' }
                ]
              }
            ]}
          /> */}
          <SiteNavigation
            type={'single'}
            contentArr={[
              { href: '#main-content', text: 'Components' },
              { href: '#patterns', text: 'Patterns' },
              { href: '#get-started', text: 'CSS Shortcuts' }
            ]}
          />

        </div>
      </header>
    </>
  )
}

export default Header