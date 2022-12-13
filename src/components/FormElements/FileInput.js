import React from 'react'

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

export default FileInput