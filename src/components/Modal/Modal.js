import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Generates modal with body and heading text
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#modal
 * 
 * @example
 * <Modal 
     bodyText={'This is the modal container\'s body'} 
     headingText={'This is the modal container\'s heading'}
   />
 * 
 * @param {string} bodyText - Sets the text to display in the Modal body.
 * @param {string} headingText - Sets the text to display in the Modal heading.
 * 
 * @returns {React.ReactElement} returns Modal component.
 */

const Modal = ({ bodyText, headingText, modalId }) => {
  return (
    <div className='modal fade' id={modalId} role='dialog' tabIndex='-1'>
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='h4 modal-title'>{headingText}</h3>
            <button type='button' className='close btn btn-secondary' data-bs-dismiss='modal'><span className='sr-only'>Close
              modal</span><span className='ca-gov-icon-close-mark' aria-hidden='true'></span></button>
          </div>
          <div className='modal-body'>
            {bodyText}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-default' data-bs-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  bodyText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired
}

export default Modal