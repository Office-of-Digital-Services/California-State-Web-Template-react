import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Apply background colors and text colors.
 * 
 * @example
 * <TextAccentColors accentClass={'text-accent1'} text={'Hello world'} htmlTag={'p'} />
 * 
 * @param {string} accentClass - Sets class to be applied.
 * @param {string} [htmlTag] - Sets HTML tag for text and styling to be applied to. Can be <p> or <span>.
 * @param {string} text - Sets text to disply in HTML tag. 
 *  
 * @returns {React.ReactElement} Returns the TextAccentColors component.
 */

const TextAccentColors = ({ accentClass, htmlTag, text }) => {
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