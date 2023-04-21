import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Customizable button
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#button
 * 
 * @example
 * <Button
      buttonSize={'lg'}
      buttonText={'Primary color'}
      buttonType={'primary'}
      disabled={true}
      href={'#'}
   />
 * 
 * @param {string} [href] - URL to navigate to on click.
 * @param {('xs'|'sm'|'default'|'lg')} [buttonSize='default'] - Set button size.
 * @param {('default'|'highlight'|'outline-highlight'|'outline-primary'|'outline-standout'|'primary'|'standout')} [buttonType='default'] - Set class applied to button.
 * @param {string} buttonText - Set text to display in button.
 * @param {boolean} [disabled=false] - Set button disabled attribute.
 *  
 * @returns {React.ReactElement} Returns the Button component
 */

const Button = ({ href, buttonSize = 'default', buttonType = 'default', buttonText, disabled = false }) => {
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