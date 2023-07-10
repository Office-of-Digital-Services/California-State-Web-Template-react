import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = ({ id, labelText, optionsArr }) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select className={'form-select form-select-lg mb-3'} aria-label={'.form-select-lg example'} id={id}>
        {optionsArr.length > 0 ? <option selected={""}>Select an option</option> : null}
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