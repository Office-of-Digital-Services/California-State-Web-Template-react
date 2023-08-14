import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Text area with styling for forms
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#text-area
 * 
 * @example
 * <TextArea
     id={'exampleInputComment'}
     isRequired={true}
     labelText={'Your message'}
     subText={'Use this space for error messages or instructional text'}
   />

 * @param {string} id - Sets id for Text Area.
 * @param {boolean} [isRequired=false] - Sets required attribute for Text Area.
 * @param {string} labelText - Sets display text for Text Area label.
 * @param {string} [subtext] - Sets subtext for Text Area.

 * @returns {React.ReactElement} returns TextArea component.
 */

const TextArea = ({ id, subText, labelText, isRequired = false }) => {
  return (
    <>
      <label className={'form-control-label'} htmlFor={id}>
        {isRequired ? <span className={'required-label'}>*</span> : null}
        {isRequired ? <span className="sr-only">Required field:</span> : null}
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

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  subText: PropTypes.string
}

export default TextArea