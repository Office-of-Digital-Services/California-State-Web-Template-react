import React from 'react';
import Image1 from './background-primary.jpg';
import Image2 from './bg-open-data.jpg';
import Image3 from './main-banner4.jpg';

const Parallax = () => {
  return (
    <>
      <div className={'parallax-bg height-400'} style={{ backgroundImage: `url(${Image1})` }}>
        <div className={'section-impact width-200 height-80 brd-gray-light brd-solid-1 relative-centered'}>
          <h2 className={'h5 text-center m-0 p-a-md relative-centered'}>SCROLL DOWN</h2>
        </div>
      </div>
      <div className={'parallax-bg height-300'} style={{ backgroundImage: `url(${Image2})` }}>
        <div className={'container p-y-lg'}>
          <h2 className={'text-center'}>Parallax Height</h2>
          <p className={'text-center'}>height can be specified by adding height class, such as
            <code className={'color-black'}>.height-300</code>
          </p>
        </div>
      </div>
      <div className={'parallax-bg height-300 bg-dark'} style={{ backgroundImage: `url(${Image3})` }}>
        <div className={'container p-y-lg'}>
          <h2 className={'text-center color-white'}>Light Text Color</h2>
          <p className={'text-center color-white'}>Make light text on dark backgrounds by adding class .color-white
          </p>
        </div>
      </div>
    </>
  )
}

export default Parallax