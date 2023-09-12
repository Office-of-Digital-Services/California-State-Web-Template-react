import React from 'react';
import PropTypes from 'prop-types';
import Logo from './template-logo.png';

/**
 * @summary Generates a site header listing a state and state department.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Structure#siteheader
 * 
 * @example
 * <SiteHeader
     departmentText={'Web Template'}
     stateText={'State of California'}
   />
 * 
 * @param {string} departmentText - Sets the name of the department.
 * @param {string} stateText - Sets the name of the state.
 * 
 * @returns {React.ReactElement} Returns the SiteHeader structure element.
 */

const SiteHeader = ({ stateText, departmentText }) => (
  <div className="section-default">
    <div className="branding">
      <div className="header-organization-banner">
        <a href="/">
          <div className="logo-assets">
            <img src={Logo} className="logo-img" alt="State Template Logo" />
            <div className="logo-text">
              <span className="logo-state">{stateText}</span>
              <span className="logo-dept">{departmentText}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
)

SiteHeader.propTypes = {
  departmentText: PropTypes.string.isRequired,
  stateText: PropTypes.string.isRequired
}

export default SiteHeader