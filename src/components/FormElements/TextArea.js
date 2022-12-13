import React from 'react'

const TextArea = ({ id, subText, labelText, isRequired }) => {
  return (
    <>
      <label className={'form-control-label'} htmlFor={id}>
        {isRequired ? <span className={'required-label'}>*</span> : null}
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

export default TextArea