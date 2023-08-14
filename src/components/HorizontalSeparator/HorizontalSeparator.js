import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Horizontal line that can be solid or dotted.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#horizontal-separator
 * 
 * @example
 * <HorizontalSeparator isDotted={true} />
 * 
 * @param {boolean} [isDotted=false] - Sets style for Horizontal Separator.
 * @returns {React.ReactElement} returns HorizontalSeparator component.
 */

const HorizontalSeparator = ({ isDotted }) => {
  return (
    <hr className={isDotted ? 'hr-understated' : ''} />
  )
}

HorizontalSeparator.propTypes = {
  isDotted: PropTypes.bool
}

export default HorizontalSeparator