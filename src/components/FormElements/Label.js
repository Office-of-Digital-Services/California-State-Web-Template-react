import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Label with styling for forms
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#label
 * 
 * @example
 * <Label 
     labelFor={'input-1'}
     labelText={'Display text goes here'}
   />

 * @param {string} labelFor - Determines html tag that Label refers to. Set value to target tag's id.
 * @param {string} labelText - Sets text to display in Label. 

 * @returns {React.ReactElement} returns the Label component.
 */

const Label = ({ labelFor, labelText }) => {
  return (
    <label className="form-control-label" htmlFor={labelFor}>{labelText}</label>
  )
}

Label.propTypes = {
  labelFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
}

export default Label