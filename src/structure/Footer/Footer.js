import React, { useEffect } from 'react';
import Logo from './Ca-Gov-Logo-Gold.svg';
import SiteFooter from '../SiteFooter/SiteFooter';

const Footer = () => {
  useEffect(() => {
    const hasScript = document.getElementById('cdn-script');

    if (!hasScript) {

      const script = document.createElement("script");
      script.src = "https://california.azureedge.net/cdt/statetemplate/6.1.1/js/cagov.core.js";
      script.async = true;
      script.id = "cdn-script";

      document.body.appendChild(script);
    }

  }, []);
  return (
    <>
      <SiteFooter
        contentArr={[
          {
            title: 'Column Title',
            linkArr: [
              { href: '#', title: 'Link title' },
              { href: '#', title: 'Link title' },
            ]
          },
          {
            title: 'Column Title',
            linkArr: [
              { href: '#', title: 'Link title' },
              { href: 'https://cdt.ca.gov/', title: 'External link title' },
            ]
          },
          {
            title: 'Column Title',
            linkArr: [
              { href: '#', title: 'Link title' },
              { href: '#', title: 'Link title' }
            ]
          }
        ]}
      />
      <footer id="footer" className="global-footer">
        <button className="return-top"><span className="sr-only">Back to top</span></button>
        <div className="container">
          <div className="d-flex">
            <a href="https://ca.gov" className="cagov-logo" target="_blank" rel='noreferrer'>
              <img src={Logo} alt="CA.gov logo" />
            </a>

            <ul className="footer-links">
              <li><a href="/conditions-of-use.html">Conditions of use</a></li>
              <li><a href="/privacy-policy.html">Privacy policy</a></li>
              <li><a href="/images/WebAccessibilityCert-beta.template.webstandards.ca.gov.pdf" aria-label="Accessibility Certification">Accessibility</a></li>
              <li><a href="/sitemap.html">Sitemap</a></li>
              <li><a href="/about.html">About</a></li>
            </ul>

            <ul className="socialsharer-container">
              <li><a href="https://github.com/Office-of-Digital-Innovation/California-State-Web-Template"><span className="ca-gov-icon-github" aria-hidden="true"></span><span className="sr-only">GitHub</span></a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-right">
            Copyright ©
            <span id="thisyear">
              {new Date().getFullYear()}</span> State of California
          </div>
        </div>
      </footer>

      <div className="decoration-last">&nbsp;</div>
    </>
  )
}

export default Footer