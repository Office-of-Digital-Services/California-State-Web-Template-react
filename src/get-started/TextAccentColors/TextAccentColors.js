import React from 'react';
import PropTypes from 'prop-types';

const TextAccentColors = ({ htmlTag, accentClass, text }) => {
  const content = htmlTag === 'p' ?
    <p className={accentClass}>{text}</p> :
    <span className={accentClass}>{text}</span>
  return content;
}

TextAccentColors.propTypes = {
  accentClass: PropTypes.string.isRequired,
  htmlTag: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default TextAccentColors