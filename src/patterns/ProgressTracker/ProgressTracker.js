import React from 'react';
import PropTypes from 'prop-types';
import HorizontalTracker from './HorizontalTracker';
import VerticalTracker from './VerticalTracker';
import StepList from './StepList';

/**
 * @summary Generate a progress tracker with three different styles
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Patterns#progress-tracker
 * 
 * @example
 * <ProgressTracker
     type={'horizontal'}
     currentStep={3}
     contentArr={
       [
         {
           title: 'Step 1',
           body: 'Step 1 body.',
         },
         {
           title: 'Step 2',
           body: 'Step 2 body.',
         },
         {
           title: 'Step 3',
           body: 'Step 3 body.',
         },
         {
           title: 'Step 4',
           body: 'Step 4 body.',
         },
       ]
     }
   />
   <ProgressTracker
     type={'vertical'}
     contentArr={
       [
         {
           title: 'Step 1 Contributor',
           body: 'Step 1 body.',
           date: 'YY - YY'
         },
         {
           title: 'Step 2 Contributor',
           body: 'Step 2 body.',
           date: 'YY - YY'
         },
         {
           title: 'Step 3 Contributor',
           body: 'Step 3 body.',
           date: 'YY - YY'
         },
         {
           title: 'Step 4 Contributor',
           body: 'Step 4 body.',
           date: 'YY - YY'
         },
       ]
     }
   />
   <ProgressTracker
     type={'step'}
     contentArr={
       [
         {
           title: 'Step 1 title',
           body: 'Step 1 body.',
         },
         {
           title: 'Step 2 title',
           body: 'Step 2 body. ',
         },
         {
           title: 'Step 3 title',
           body: 'Step 3 body.',
         },
       ]
     }
   />
 * 
 * @param {Object[]} contentArr - An array of objects containing the following keys with String values: body, date, title
 * @param {number} currentStep - Sets the current step for the Horizontal Progress Tracker.
 * @param {string} type - Determines the type of Progress Tracker to generate: horizontal, step, vertical
 * 
 * @returns {React.ReactElement} Returns the ProgressTracker pattern.
 */

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