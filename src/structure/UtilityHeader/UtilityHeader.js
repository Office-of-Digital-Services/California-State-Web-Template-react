import React from 'react';
import Logo from './Ca-Gov-Logo-Gold.svg';
import './settings';

const UtilityHeader = () => {
  return (
    <>
      <div class="utility-header">
        <div class="container">
          <div class="flex-row">
            <div class="social-media-links">
              <div class="header-cagov-logo"><a href="https://ca.gov"><span class="sr-only">CA.gov</span><img src={Logo} class="pos-rel" alt="" aria-hidden="true" /></a></div>
              <p class="official-tag"><span class="desktop-only">Official website of the</span> State of California</p>
            </div>
            <div class="settings-links">
              <button class="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#siteSettings" aria-expanded="false" aria-controls="siteSettings"><span class="ca-gov-icon-gear" aria-hidden="true"></span>Settings</button>
            </div>
          </div>
        </div>
      </div>

      <div class="site-settings section collapse collapsed" id="siteSettings">
        <div class="container p-y">

          <div class="settings-bar-buttons">

            <div class="btn-group" aria-label="contrastMode">
              <button type="button"
                class="btn btn-default btn-lg bg-transparent bg-s1-hover disableHighContrastMode">Reset</button>
            </div>

            <div class="btn-group"><button type="button" class="btn btn-s1 btn-lg brd-s1 enableHighContrastMode">High
              contrast</button>
            </div>

            <div class="btn-group">
              <button type="button" class="btn btn-s1 btn-lg brd-s1 increaseTextSize">
                <span class="hidden-xs">Increase font size</span>
                <span class="visible-xs">Font
                  <span class="sr-only">increase</span>
                  <span class="ca-gov-icon-plus-line small" aria-hidden="true"></span>
                </span>
              </button>
            </div>

            <div class="btn-group">
              <button type="button" class="btn btn-s1 btn-lg brd-s1 decreaseTextSize">
                <span class="hidden-xs">Decrease font size</span>
                <span class="visible-xs">Font <span class="sr-only">decrease</span>
                  <span class="ca-gov-icon-minus-line small" aria-hidden="true"></span>
                </span>
              </button>
            </div>

            <div class="btn-group">
              <button type="button" class="btn btn-s1 btn-lg brd-s1 dyslexicFont">Dyslexic font</button>
            </div>

            <button type="button" class="close ms-auto" data-bs-toggle="collapse" data-bs-target="#siteSettings"
              aria-label="Close">
              <span aria-hidden="true" class=" ca-gov-icon-close-mark"></span>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default UtilityHeader