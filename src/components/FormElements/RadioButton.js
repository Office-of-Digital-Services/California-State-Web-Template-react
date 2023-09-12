import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Radio Button with styling for forms
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#radio-button
 * 
 * @example
 * <RadioButton
     id={'exampleRadio1'}
     radioName={'test_group'}
     radioText={'Option 1'}
     radioValue={'1'}
   />
 * 
 * @param {string} id - Sets id for Radio Button.
 * @param {string} radioName - Sets name for Radio Button. 
 * @param {string} radioText - Sets display text for Radio Button label. 
 * @param {string} radioValue - Sets value for Radio Button. 
 *  
 * @returns {React.ReactElement} returns RadioButton component.
 */

const RadioButton = ({ radioName, radioText, radioValue, id }) => {
  return (
    <div className={'form-check m-b'}>
      <input className={'form-check-input'} type={'radio'} name={radioName} value={radioValue} id={id} />
      <label className={'form-check-label'} htmlFor={id}>
        {radioText}
      </label>
    </div>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  radioName: PropTypes.string.isRequired,
  radioText: PropTypes.string.isRequired,
  radioValue: PropTypes.string.isRequired
}

export default RadioButton