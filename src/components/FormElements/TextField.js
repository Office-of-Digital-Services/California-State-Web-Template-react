import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Text field with styling for forms.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#text-field
 * 
 * @example
 * <TextField 
     id={'InputName'}
     isRequired={false}
     labelText={'Full Name'}
     placeholder={'Name'}
   />
 * 
 * @param {string} id - Sets id for Text Field.
 * @param {boolean} [isRequired=false] - Sets required attribute for Text Field.
 * @param {string} labelText - Sets display text for Text Field label.
 * @param {string} [placeholder] - Sets placeholder text for Text Field.
 * 
 * @returns {React.ReactElement} returns TextField component.
 */

const TextField = ({ id, isRequired = false, labelText, placeholder }) => {
  return (
    <>
      <label className={'form-control-label'} htmlFor={id}>
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

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextField