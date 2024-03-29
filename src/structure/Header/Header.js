import React from 'react';
import SiteHeader from '../SiteHeader/SiteHeader';
import MobileControls from '../MobileControls/MobileControls';
import ActiveSearch from '../Search/ActiveSearch';
import SiteNavigation from '../SiteNavigation/SiteNavigation';

/**
 * @summary The Header component contains static and dynamic Structure elements. The SiteHeader and SiteNavigation can be customized by passing in props.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Structure#header
 * 
 * @example
 * <Header />
 * 
 * @returns {React.ReactElement} Returns the Header structure element.
 */

const Header = () => (
  <header role={'banner'} id={'header'} className={'global-header fixed'}>
    <div id="skip-to-content">
      <a href="#main-content">Skip to Main Content</a>
    </div>
    <div className="utility-header">
      <div className="container">
        <div className="flex-row">
          <div className="social-media-links">
            <div className="header-cagov-logo">
              <a href="https://ca.gov">
                <span className="sr-only">CA.gov</span>
                <span className="ca-gov-logo-svg"></span>
              </a>
            </div>
            <p className="official-tag">
              <span className="desktop-only">Official website of the </span>
              State of California
            </p>
          </div>
          <div className="settings-links"></div>
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
          { href: '#', navHeader: 'Nav Link 1' },
          { href: '#', navHeader: 'Nav Link 2' },
          {
            navHeader: 'Nav Link 3',
            navBodyArr: [
              // Using # as the href in a second-level-link will add the .bold class to the title
              { title: 'Dropdown Link 3-1', href: '/second-level-link' },
              { title: 'Dropdown Link 3-2', href: '/second-level-link' },
              { title: 'Dropdown Link 3-3', href: '/second-level-link' }
            ]
          },
          { href: '#', navHeader: 'Nav Link 4' },
        ]}
      />
    </div>
  </header >
)

export default Header