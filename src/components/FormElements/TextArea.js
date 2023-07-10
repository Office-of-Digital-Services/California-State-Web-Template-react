import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ id, subText, labelText, isRequired }) => {
  return (
    <>
      <label className={'form-control-label'} htmlFor={id}>
        {isRequired ? <span className={'required-label'}>*</span> : null}
        {isRequired ? <span className="sr-only">Required field:</span> : null}
        {labelText}
      </label>
      <textarea id={id} className={'form-control'} rows={'5'} cols={'80'}></textarea>
      {subText ? <small>{subText}</small> : null}
      {isRequired ?
        <div className={'invalid-feedback d-block'}>
          This field is required
        </div> :
        <div className={'feedback text-muted'}></div>
      }
    </>
  )
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  subText: PropTypes.string
}

export default TextArea