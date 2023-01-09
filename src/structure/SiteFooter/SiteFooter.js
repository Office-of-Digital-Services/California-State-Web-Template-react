import React from 'react';
import PropTypes from 'prop-types';

const SiteFooter = ({ contentArr }) => {
  return (
    <aside className="p-b-md p-t-sm section-standout site-footer">
      <div className="container">
        <div className="row">
          {contentArr.map((item, idx) => (
            <div className="col-md-4" key={`sf-div-item${idx}`}>
              <h3 className="h4 w-100 brd-bottom brd-highlight p-b">{item.title}</h3>
              {item.linkArr.map((linkItem, linkIdx) => (
                linkItem.href.includes('http') ?
                  <a href={linkItem.href} className="d-block no-underline m-y font-size-16" key={`sf-a-item${linkIdx}`} target={'_blank'} rel={'noreferrer'}>{linkItem.title}</a> :
                  <a href={linkItem.href} className="d-block no-underline m-y font-size-16" key={`sf-a-item${linkIdx}`}>{linkItem.title}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

SiteFooter.propTypes = {
  contentArr: PropTypes.array.isRequired
}

export default SiteFooter