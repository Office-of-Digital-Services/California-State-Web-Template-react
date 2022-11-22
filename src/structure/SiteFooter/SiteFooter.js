import React from 'react'

const SiteFooter = () => {
  return (
    <aside className="p-b-md p-t-sm section-standout site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="h4 w-100 brd-bottom brd-highlight p-b">State Web Template</h3>
            <a href="/about.html" className="d-block no-underline m-y font-size-16">About</a>
            <a href="/contact-us.html" className="d-block no-underline m-y font-size-16">Contact us</a>
          </div>
          <div className="col-md-4">
            <h3 className="h4 w-100 brd-bottom  brd-highlight p-b">Related websites</h3>
            <a href="https://webstandards.ca.gov" className="d-block no-underline m-y font-size-16">State Web Standards</a>
            <a href="https://designsystem.webstandards.ca.gov" className="d-block no-underline m-y font-size-16">California Design
              System</a>
            <a href="https://github.com/Office-of-Digital-Services/California-State-Web-Template-Website"
              className="d-block no-underline m-y font-size-16">State Web Template GitHub</a>
          </div>
          <div className="col-md-4">
            <h3 className="h4 w-100 brd-bottom brd-highlight p-b">Resources</h3>
            <a href="https://designsystem.webstandards.ca.gov/style/content"
              className="d-block no-underline m-y font-size-16">Content style
              guide</a>
            <a href="https://designsystem.webstandards.ca.gov/style/design" className="d-block no-underline m-y font-size-16">Design
              style
              guide</a>
            <a href="https://designsystem.webstandards.ca.gov/why-web-components"
              className="d-block no-underline m-y font-size-16">Why web
              components</a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SiteFooter