import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary File input with styling for forms.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#file-input
 * 
 * @example
 * <FileInput
     id={'test_file_input'}
     labelText={'Upload your file'}
     feedbackText={'Feedback text.'}
   />
 * 
 * @param {string} id - Sets id for File Input.
 * @param {string} labelText - Sets text to display in File Input label.
 * @param {string} feedbackText - Sets feedback text for File Input.
 * 
 * @returns {React.ReactElement} Returns the FileInput component.
 */

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