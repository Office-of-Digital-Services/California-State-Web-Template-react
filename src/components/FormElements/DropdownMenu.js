import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} id - Id for dropdown menu
 * @param {string} labelText - Text to display in dropdown menu label
 * @param {string[]} optionsArr - Array of objects containing text and value keys
 * @param {string} optionsArr.text - Text to display in dropdown content
 * @param {string} optionsArr.value - Value to display for dropdown content
 * @returns 
 */

const DropdownMenu = ({ id, labelText, optionsArr }) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select className={'form-select form-select-lg mb-3'} aria-label={'.form-select-lg example'} id={id}>
        {optionsArr.length > 0 ? <option defaultValue={""}>Select an option</option> : null}
        {optionsArr.map((option, idx) => <option value={option.value} key={`dm-option-item${idx}`}>{option.text}</option>)}
      </select>
    </>
  )
}

DropdownMenu.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  optionsArr: PropTypes.array.isRequired
}

export default DropdownMenu