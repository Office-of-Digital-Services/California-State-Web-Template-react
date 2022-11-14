import React from 'react';
import Logo from './template-logo.png';

const SiteHeader = ({ stateText, departmentText }) => {
  return (
    <div class="section-default">
      <div class="branding">
        <div class="header-organization-banner">
          <a href="/">
            <div class="logo-assets">
              <img src={Logo} class="logo-img" alt="State Template Logo" />
              <div class="logo-text">
                <span class="logo-state">{stateText}</span>
                <span class="logo-dept">{departmentText}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader