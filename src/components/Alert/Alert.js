import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alertLevel, alertText, buttonHref = '', buttonText }) => {
  return (
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
}

Alert.propTypes = {
  alertLevel: PropTypes.string.isRequired,
  alertText: PropTypes.string.isRequired,
  buttonHref: PropTypes.string,
  buttonText: PropTypes.string
}

export default Alert