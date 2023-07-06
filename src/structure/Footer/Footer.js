import React from 'react';

import SiteFooter from '../SiteFooter/SiteFooter';

const Footer = () => {

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
      {/* <!-- Global Footer --> */}
      <footer id="footer" className="global-footer">
        <div className="container">
          <div className="d-flex">
            <a href="https://ca.gov" className="cagov-logo">
              <span className="sr-only">CA.gov</span>
              <span className="ca-gov-logo-svg"></span>
            </a>
            <ul className="footer-links">
              <li>
                <a href="/conditions-of-use.html">Conditions of use</a>
              </li>
              <li>
                <a href="/privacy-policy.html">Privacy policy</a>
              </li>
              <li>
                <a href="/website-acessibility-certification.html">
                  Website accessibility certification
                </a>
              </li>
              <li>
                <a href="/sitemap.html">Sitemap</a>
              </li>
            </ul>
            <ul className="socialsharer-container">
              <li>
                <a href="https://github.com/Office-of-Digital-Innovation/California-State-Web-Template">
                  <span className="ca-gov-icon-github" aria-hidden="true"></span>
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Statement  */}
        <div className="copyright">
          <div className="container text-right">
            Copyright ©
            <span id="thisyear">
              {new Date().getFullYear()}
            </span>
            {' '}State of California
          </div>
        </div>
        <button className="return-top">
          <span className="sr-only">Back to top</span>
        </button>
      </footer>
      {/* <!-- Extra Decorative Content --> */}
      <div className="decoration-last">&nbsp;</div>
    </>
  )
}

export default Footer