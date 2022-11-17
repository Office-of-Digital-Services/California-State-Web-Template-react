import React from 'react';
import FeatureBanner from './FeatureBanner';
import FullSpanBanner from './FullSpanBanner';

const Banner = ({ titleText, bodyText, buttonText, imageSrc, type }) => {
  const content = type === 'feature' ?
    <FeatureBanner
      titleText={titleText}
      bodyText={bodyText}
      buttonText={buttonText}
      imageSrc={imageSrc}
    />
    :
    <FullSpanBanner
      titleText={titleText}
      bodyText={bodyText}
      buttonText={buttonText}
      imageSrc={imageSrc}
    />
  return (
    <div>{content}</div>
  )
}

export default Banner