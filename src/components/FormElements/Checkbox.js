import React from 'react';
import PropTypes from 'prop-types';

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