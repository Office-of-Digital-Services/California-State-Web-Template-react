//@ts-check

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Dismissable alert banner 
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#alert
 * 
 * @example 
 * // Generates an info level alert with text and button containing link
 * <Alert
 *   alertLevel={'info'}
 *   alertText={'We\'ve made some changes that might impact your experience.'}
 *   buttonHref={'https://google.com'}
 *   buttonText={'Learn more'}
 * />
 * 
 * @param {{ alertLevel:string, alertText:string, buttonHref:string, buttonText:string }} params
 * @returns {React.ReactElement} Returns the Alert component
 */


 const Alert = ({ alertLevel, alertText, buttonHref = '', buttonText }) => (
    <div className={`alert alert-${alertLevel} alert-dismissible alert-banner`} role={'alert'}>
      <div className={'container'}>
        <button type={'button'} className={'close ms-lg-auto'} data-bs-dismiss={'alert'} aria-label={'Close'}>
          <span className={'ca-gov-icon-close-mark'} aria-hidden={'true'}></span>
        </button>
        {alertLevel ?
          <span className={'alert-level'}>
            <span className={'ca-gov-icon-important'} aria-hidden={'true'}></span>
            {alertLevel.toUpperCase()}
          </span>
          : null}
        {alertText ?
          <span className={'alert-text'}>{alertText}</span>
          : null}
        {buttonText ?
          <a href={buttonHref} className={'btn btn-default btn-xs'}>{buttonText}</a>
          : null}
      </div>
    </div>
  )

Alert.propTypes = {
  alertLevel: PropTypes.string.isRequired,
  alertText: PropTypes.string.isRequired,
  buttonHref: PropTypes.string,
  buttonText: PropTypes.string
}

export default Alert