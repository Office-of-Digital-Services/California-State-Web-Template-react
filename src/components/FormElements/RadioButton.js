import React from 'react';
import PropTypes from 'prop-types';

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