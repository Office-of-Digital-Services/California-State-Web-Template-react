import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Generates a grid of links.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Patterns#link-grid
 * 
 * @example
 * <LinkGrid 
     linkArr={
       [
         { href: '#', linkText: 'Short link 1' },
         { href: '#', linkText: 'Short link 2' },
         { href: '#', linkText: 'Short link 3' }
       ]
      }
   />
 * 
 * @param {Object[]} linkArr
 * @param {string} href - Sets destination URL.
 * @param {string} linkText - Sets link text.
 * 
 * @returns {React.ReactElement} Returns the LinkGrid pattern.
 */

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