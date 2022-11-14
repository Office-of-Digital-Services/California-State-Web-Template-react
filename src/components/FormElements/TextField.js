import React from 'react'

const TextField = ({ id, placeholder, labelText, isRequired }) => {
  return (
    <>
      <label className={'form-control-label'} for={id}>
        {isRequired ? <span className={'required-label'}>*</span> : null}
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

export default TextField