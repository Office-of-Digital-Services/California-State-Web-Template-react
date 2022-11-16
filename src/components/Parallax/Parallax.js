import React from 'react';

const Parallax = ({ contentObj }) => {
  const { imageSrc, heightInPx, headingText, bodyText, centerText, hasLightTextColor } = contentObj;
  return (
    <div className={`parallax-bg height-${heightInPx} ${hasLightTextColor ? 'bg-dark' : ''}`} style={{ backgroundImage: `url(${imageSrc})` }}>
      {centerText ?
        <div className="section-impact width-200 height-80 brd-gray-light brd-solid-1 relative-centered">
          <h2 className="h5 text-center m-0 p-a-md relative-centered">{centerText}</h2>
        </div> :
        null
      }
      <div className={'container p-y-lg'}>
        <h2 className={`text-center ${hasLightTextColor ? 'color-white' : ''}`}>{headingText}</h2>
        <p className={`text-center ${hasLightTextColor ? 'color-white' : ''}`}>{bodyText}</p>
      </div>
    </div>
  )
}

export default Parallax