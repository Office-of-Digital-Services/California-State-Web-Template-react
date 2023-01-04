import React from 'react';
import PropTypes from 'prop-types';

const FileInput = ({ id, labelText, feedbackText }) => {
  return (
    <>
      <label htmlFor={id} className={'mb-1'}>{labelText}</label>
      <div className={'input-group mb-3'}>
        <input type={'file'} className={'form-control'} id={id} />
      </div>
      <div className={'feedback small'}>{feedbackText}</div>
    </>
  )
}

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  feedbackText: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
}

export default FileInput