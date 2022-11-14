import React from 'react'

const Label = ({ labelFor, labelText }) => {
  return (
    <label class="form-control-label" for={labelFor}>{labelText}</label>
  )
}

export default Label