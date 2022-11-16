import React from 'react'

const Modal = ({ headingText, bodyText }) => {
  return (
    <div className='modal fade' id='modal' role='dialog' tabIndex='-1'>
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

export default Modal