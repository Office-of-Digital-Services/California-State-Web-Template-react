import React from 'react';
import PropTypes from 'prop-types';

const GradientBackgrounds = ({ type }) => {
  const setType = (t) => {
    switch (t) {
      case 'primary':
        return 'bg-primary-gradient';
      case 'highlight':
        return 'bg-highlight-gradient';
      case 'standout':
        return 'bg-standout-gradient';
      case 'secondary':
        return 'bg-secondary-gradient';
      case 'primary-standout':
        return 'bg-primary-standout-gradient';
      case 'primary-highlight':
        return 'bg-primary-highlight-gradient';
      case 'primary-secondary':
        return 'bg-primary-secondary-gradient';
      case 'standout-highlight':
        return 'bg-standout-highlight-gradient';
      case 'danger-warning':
        return 'bg-danger-warning-gradient';
      case 'info-success':
        return 'bg-info-success-gradient';
      case 'radial-gray':
        return 'bg-grey-radialgradient';
      case 'radial-gray-light':
        return 'bg-greylight-radialgradient';
      case 'radial-primary':
        return 'bg-primary-radialgradient';
      case 'radial-highlight':
        return 'bg-highlight-radialgradient';
      case 'radial-standout':
        return 'bg-standout-radialgradient';
      case 'radial-secondary':
        return 'bg-secondary-radialgradient';
      case 'radial-secondary-light':
        return 'bg-secondarylight-radialgradient';
      default:
        return 'bg-primary-gradient';
    }
  }
  return (
    <div className={`container height-300 ${setType(type)}`}></div>
  )
}

GradientBackgrounds.propTypes = {
  type: PropTypes.string
}

export default GradientBackgrounds