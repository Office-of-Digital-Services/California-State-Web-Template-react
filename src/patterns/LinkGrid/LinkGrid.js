import React from 'react';
import PropTypes from 'prop-types';

const LinkGrid = ({ linkArr }) => {
  return (
    <div className="row">
      {linkArr.map((link, idx) => {
        return (
          <div key={`lg-div-item${idx}`} className="col-md-4 mb-4">
            <a href={link.href} className="link-grid">{link.linkText}</a>
          </div>
        )
      })}
    </div>
  )
}

LinkGrid.propTypes = {
  linkArr: PropTypes.array.isRequired
}

export default LinkGrid