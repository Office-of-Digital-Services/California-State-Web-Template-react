import React from 'react';
import headerBear from './header-bear.png';

const FullSpanBanner = ({ titleText, bodyText, buttonHref, buttonText, imageSrc }) => {
  return (
    <div className='header-primary-banner d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className='container p-y-lg'>
        <div className='row'>
          <div className='col-sm color-white text-center p-a-lg'>

            <h2 className='text-3rem m-t-0 overflow-visible'>{titleText}</h2>
            <p className='text-1-5rem line-height-1-5em'>{bodyText}</p>
            <div className='btn-row p-b'>
              <a href={buttonHref} className='btn btn-lg btn-highlight m-t'>{buttonText}</a>
            </div>
          </div>
          <div className={'col-sm my-auto'}>
            <img src={headerBear} alt={''} width={'600px'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullSpanBanner