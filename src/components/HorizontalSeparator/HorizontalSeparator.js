import React from 'react';
import PropTypes from 'prop-types';

const HorizontalSeparator = ({ isDotted }) => {
  return (
    <hr className={isDotted ? 'hr-understated' : ''} />
  )
}

HorizontalSeparator.propTypes = {
  isDotted: PropTypes.bool
}

export default HorizontalSeparator