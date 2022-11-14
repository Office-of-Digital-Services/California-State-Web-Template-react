import React from 'react'

const DropdownMenu = ({ id, labelText, optionsArr }) => {
  return (
    <>
      <label for={id}>{labelText}</label>
      <select className={'form-select form-select-lg mb-3'} aria-label={'.form-select-lg example'} id={id}>
        {optionsArr.length > 0 ? <option selected={""}>Select an option</option> : null}
        {optionsArr.map((option, idx) => <option value={option.value} key={`dm-option-item${idx}`}>{option.text}</option>)}
      </select>
    </>
  )
}

export default DropdownMenu