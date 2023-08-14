import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Parallax scrolling image with text.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#parallax
 * 
 * @example
 * <Parallax
 *   contentObj={
       {
         bodyText: 'Make light text on dark backgrounds by changing the hasLightTextColor prop value to true',
         centerText: 'Add optional center text and container',
         hasLightTextColor: true,
         headingText: 'Light text color',
         heightInPx: '300',
         imageSrc: './path/to/image.jpg',
       }
     }
 * 
 * @param {object} contentObj - An object containing required key/value pairs.
 * @param {string} contentObj.bodyText - Sets body text.
 * @param {string} contentObj.centerText - Sets center text and container.
 * @param {boolean} contentObj.hasLightTextColor - Darkens background if set to true.
 * @param {string} contentObj.headingText - Sets heading text.
 * @param {string} contentObj.heightInPx - Sets height in pixels.
 * @param {string} contentObj.imageSrc - Sets URI for image.
 * 
 * @returns {React.ReactElement} returns Parallax component.
 */

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

Parallax.propTypes = {
  contentObj: PropTypes.object.isRequired
}

export default Parallax