import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ id, placeholder, labelText, isRequired }) => {
  return (
    <>
      <label className={'form-control-label'} htmlFor={id}>
        {isRequired ? <span className={'required-label'}>*</span> : null}
        {isRequired ? <span className="sr-only">Required field:</span> : null}
        {labelText}
      </label>
      <input type={'text'} className={'form-control'} id={id} placeholder={placeholder} />
      {isRequired ?
        <div className={'invalid-feedback d-block'}>
          This field is required
        </div> :
        <div className={'feedback text-muted'}></div>
      }
    </>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextField