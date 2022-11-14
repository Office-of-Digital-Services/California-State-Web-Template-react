import React from 'react'

const RadioButton = ({ radioName, radioText, radioValue, id }) => {
  return (
    <div className={'form-check m-b'}>
      <input className={'form-check-input'} type={'radio'} name={radioName} value={radioValue} id={id} />
      <label className={'form-check-label'} for={id}>
        {radioText}
      </label>
    </div>
  )
}

export default RadioButton