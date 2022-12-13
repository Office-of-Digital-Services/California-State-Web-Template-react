import React from 'react'

const Label = ({ labelFor, labelText }) => {
  return (
    <label className="form-control-label" htmlFor={labelFor}>{labelText}</label>
  )
}

export default Label