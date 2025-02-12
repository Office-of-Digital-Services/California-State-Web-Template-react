import React from 'react';
import PropTypes from 'prop-types';

import infoImage from './alert-info.svg';
import dangerImage from './alert-warning-diamond.svg';
import resolutionImage from './alert-success.svg';

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
 * @param {{ alertLevel:string, alertText:string, boldText:string, href:string, linkText:string }} params
 * @returns {React.ReactElement} Returns the Alert component
 */


const Alert = ({ alertLevel, alertText, boldText, href = '', linkText }) => {
  const setAlertLevel = (/** @type {string} */ propAlertLevel) => {
    switch (propAlertLevel) {
      case 'info':
        return infoImage;
      case 'danger':
        return dangerImage;
      case 'resolution':
        return resolutionImage
      default:
        return infoImage
    }
  }

  const setContent = () => {
    if (alertLevel !== 'warning') {
      return (
        <div className="alert alert-dismissible alert-banner" role="alert">
          <div className="container">
            <img src={setAlertLevel(alertLevel)} alt="alert info icon" />
            <span className="alert-text">
              <span className="text-bold">{boldText} </span>
              {alertText}
              <span className="ca-gov-icon-pipe" aria-hidden="true" />
              <a href={href}>{linkText}</a>
            </span>
            <button type="button" className="close ms-lg-auto" data-bs-dismiss="alert" aria-label="Close"><span className="ca-gov-icon-close-mark" aria-hidden="true" /></button>
          </div>
        </div>
      )
    }

    return (
      <div className="alert alert-dismissible alert-banner" role="alert">
        <div className="container">
          <span className="alert-icon ca-gov-icon-warning-triangle text-warning" aria-hidden="true" />
          <span className="alert-text">
            <span className="text-bold">{boldText}</span>
            {alertText}
            <span className="ca-gov-icon-pipe" aria-hidden="true" />
            <a href={href}>{linkText}</a>
          </span>
          <button type="button" className="close ms-lg-auto" data-bs-dismiss="alert" aria-label="Close"><span className="ca-gov-icon-close-mark" aria-hidden="true" /></button>
          <button type="button" className="close ms-lg-auto" data-bs-dismiss="alert" aria-label="Close"><span className="ca-gov-icon-close-mark" aria-hidden="true" /></button>
        </div>
      </div>
    )
  }

  return setContent()
}

Alert.propTypes = {
  alertLevel: PropTypes.string.isRequired,
  alertText: PropTypes.string.isRequired,
  boldText: PropTypes.string,
  href: PropTypes.string,
  linkText: PropTypes.string
}

export default Alert