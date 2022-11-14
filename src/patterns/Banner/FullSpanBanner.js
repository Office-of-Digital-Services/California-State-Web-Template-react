import React from 'react';

const FullSpanBanner = ({ titleText, bodyText, buttonText, imageSrc }) => {
  return (
    <div className='header-primary-banner d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className='container p-y-lg'>
        <div className='row'>
          <div className='col-sm color-white text-center p-a-lg'>

            <h2 className='text-3rem m-t-0 overflow-visible'>{titleText}</h2>
            <p className='text-1-5rem line-height-1-5em'>{bodyText}</p>
            <div className='btn-row p-b'>
              <a href='#' className='btn btn-lg btn-highlight m-t'>{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullSpanBanner