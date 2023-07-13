import React from 'react';
import PropTypes from 'prop-types';
import DefaultCard from './DefaultCard';
import IconCard from './IconCard';
import ImageCard from './ImageCard';

const Card = ({ icon, imageSrc, altText, titleText, bodyText, buttonText, buttonHref, type, author, agency, date }) => {
  switch (type) {
    case 'icon':
      return <IconCard bodyText={bodyText} buttonHref={buttonHref} icon={icon} titleText={titleText} />
    case 'image':
      return <ImageCard altText={altText} bodyText={bodyText} buttonHref={buttonHref} imageSrc={imageSrc} titleText={titleText} />
    default:
      return <DefaultCard bodyText={bodyText} buttonHref={buttonHref} buttonText={buttonText} icon={icon} titleText={titleText} />
  }
}

Card.propTypes = {
  agency: PropTypes.string,
  altText: PropTypes.string,
  author: PropTypes.string,
  bodyText: PropTypes.string.isRequired,
  buttonHref: PropTypes.string,
  buttonText: PropTypes.string,
  titleText: PropTypes.string.isRequired
}

export default Card