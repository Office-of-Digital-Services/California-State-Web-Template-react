import React from 'react';
import PropTypes from 'prop-types';
import FeatureBanner from './FeatureBanner';
import FullSpanBanner from './FullSpanBanner';

/**
 * @summary Generate feature or full span banner
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Patterns#banner
 * 
 * @example
 * <Banner
     type={'fullspan'}
     titleText={'Title'}
     bodyText={'Body text goes here.'}
     buttonText={'Button text goes here'}
     imageSrc={'./path/to/image.jpg'}
   />
 * 
 * @param {string} bodyText - Sets body text for Banner.
 * @param {string} buttonHref - Sets destination to visit when clicking button. 
 * @param {string} buttonText - Sets button text for Banner.
 * @param {string} imageSrc - Sets URI for image source.
 * @param {string} titleText - Sets title text for Banner.
 * @param {string} [type='default'] - Sets the type of Banner to generate. Can be 'fullspan' or 'feature'.
 * 
 *  
 * @returns {React.ReactElement} Returns the Banner component.
 */

const Banner = ({ bodyText, buttonHref, buttonText, imageSrc, titleText, type = 'fullspan' }) => {
  const content = type === 'feature' ?
    <FeatureBanner
      titleText={titleText}
      bodyText={bodyText}
      buttonHref={buttonHref}
      buttonText={buttonText}
      imageSrc={imageSrc}
    />
    :
    <FullSpanBanner
      titleText={titleText}
      bodyText={bodyText}
      buttonHref={buttonHref}
      buttonText={buttonText}
      imageSrc={imageSrc}
    />
  return (
    <div>{content}</div>
  )
}

Banner.propTypes = {
  bodyText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Banner