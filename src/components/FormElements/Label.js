import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ labelFor, labelText }) => {
  return (
    <label className="form-control-label" htmlFor={labelFor}>{labelText}</label>
  )
}

Label.propTypes = {
  labelFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
}

export default Label