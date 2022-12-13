import React from 'react'

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

export default Checkbox