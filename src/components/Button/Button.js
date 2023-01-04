import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ href, buttonSize, buttonType, buttonText, disabled }) => {
  return (
    <>
      {
        href ?
          <a href={href} className={`btn btn-${buttonType} ${disabled ? 'disabled' : null} ${buttonSize ? `btn-${buttonSize}` : null} `} role={'button'}>{buttonText}</a> :
          <button className={`btn btn-${buttonType} ${disabled ? 'disabled' : null} ${buttonSize ? `btn-${buttonSize}` : null} `}>{buttonText}</button>
      }
    </>
  )
}

Button.propTypes = {
  buttonSize: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string
}

export default Button