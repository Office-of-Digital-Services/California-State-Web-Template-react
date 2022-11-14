import React from 'react';
import Logo from './Ca-Gov-Logo-Gold.svg'

const Footer = () => {
  return (
    <>
      <footer id="footer" class="global-footer">
        <button class="return-top"><span class="sr-only">Back to top</span></button>
        <div class="container">
          <div class="d-flex">
            <a href="https://ca.gov" class="cagov-logo" target="_blank">
              <img src={Logo} alt="CA.gov logo" />
            </a>

            <ul class="footer-links">
              <li><a href="/conditions-of-use.html">Conditions of use</a></li>
              <li><a href="/privacy-policy.html">Privacy policy</a></li>
              <li><a href="/images/WebAccessibilityCert-beta.template.webstandards.ca.gov.pdf" aria-label="Accessibility Certification">Accessibility</a></li>
              <li><a href="/sitemap.html">Sitemap</a></li>
              <li><a href="/about.html">About</a></li>
            </ul>

            <ul class="socialsharer-container">
              <li><a href="https://github.com/Office-of-Digital-Innovation/California-State-Web-Template"><span class="ca-gov-icon-github" aria-hidden="true"></span><span class="sr-only">GitHub</span></a></li>
            </ul>
          </div>
        </div>

        <div class="copyright">
          <div class="container text-right">
            Copyright ©
            <span id="thisyear">
              {new Date().getFullYear()}</span> State of California
          </div>
        </div>
      </footer>

      <div class="decoration-last">&nbsp;</div>
    </>
  )
}

export default Footer