import React from 'react';
import PropTypes from 'prop-types';
import FeatureBanner from './FeatureBanner';
import FullSpanBanner from './FullSpanBanner';

const Banner = ({ titleText, bodyText, buttonHref, buttonText, imageSrc, type }) => {
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