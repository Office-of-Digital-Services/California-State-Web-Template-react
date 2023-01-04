import React from 'react';
import PropTypes from 'prop-types';
import HorizontalTracker from './HorizontalTracker';
import VerticalTracker from './VerticalTracker';
import StepList from './StepList';

const ProgressTracker = ({ type, contentArr, currentStep }) => {
  const setTrackerType = (_type) => {
    switch (_type) {
      case 'horizontal':
        return <HorizontalTracker contentArr={contentArr} currentStep={currentStep} />
      case 'vertical':
        return <VerticalTracker contentArr={contentArr} />
      case 'step':
        return <StepList contentArr={contentArr} />
      default:
        return
    }
  }

  const content = setTrackerType(type);
  return (
    <div>{content}</div>
  )
}

ProgressTracker.propTypes = {
  contentArr: PropTypes.array.isRequired,
  currentStep: PropTypes.number,
  type: PropTypes.string.isRequired
}

export default ProgressTracker