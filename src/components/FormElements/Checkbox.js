import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Checkbox with styling for forms
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#checkbox
 * 
 * @example
 * <Checkbox
     id={'exampleCheckbox1'}
     checkboxText={'Option 1'}
     checkboxValue={'1'}
   />
 *
 * @param {string} checkboxText - Text to display in checkbox label
 * @param {string} checkboxValue - Value for checkbox
 * @param {string} id - Id for checkbox
 * 
 * @returns {React.ReactElement} Returns the Checkbox element
 */

const Checkbox = ({ checkboxText, checkboxValue, id }) => {
  return (
    <div className={'form-check m-b'}>
      <input className={'form-check-input'} type={'checkbox'} value={checkboxValue} id={id} />
      <label className={'form-check-label'} htmlFor={id}>
        {checkboxText}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  checkboxText: PropTypes.string.isRequired,
  checkboxValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Checkbox