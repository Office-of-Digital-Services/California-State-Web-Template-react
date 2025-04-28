import React from 'react';
import PropTypes from 'prop-types';

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
            <svg class="logo-img" alt="State Template Logo" style={{ aspectRatio: '1/1' }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXLink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" xmlSpace="preserve">
              <g>
                <path d="M45,9.7c-1.9,0-30.1,0-32,0s-3,1.2-3,3s0,40,0,40c0,0.6,0.2,1.2,0.5,1.7c0.5,0.8,1.4,1.3,2.5,1.3h32
		c1.7,0,3-1.3,3-3c0,0,0-38.3,0-40S46.9,9.7,45,9.7z M43.4,51.1H14.6V14.4h28.7V51.1z"></path>
                <path d="M32.2,0.3c-4.8,0-24.6,0-24.6,0C4.2,0.3,0.3,1.6,0.3,8v28.5c0,4.7,4.7,4,4.7,4v-32c0-2.5,1.8-3.4,3.9-3.4
		h28C36.9,5.1,37,0.3,32.2,0.3z"></path>
              </g>
            </svg>
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