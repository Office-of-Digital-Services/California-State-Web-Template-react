import React from 'react';
import PropTypes from 'prop-types';
import DefaultCard from './DefaultCard';
import IconCard from './IconCard';
import ImageCard from './ImageCard';

/**
 * @summary Generate Icon, Image, or Default Card
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Patterns#card
 * 
 * @example
 * <Card
     titleText={'Give your card a short title'}
     bodyText={'Card body text'}
     imageSrc={'./path/to.image.jpg'}
     altText={'Card size'}
     buttonHref={'https://www.google.com'}
     buttonText={'Go to Google'}
   />
 * 
 * @param {string} altText - Sets alt text for image.
 * @param {string} bodyText - Sets body text.
 * @param {string} button - Sets button text.
 * @param {string} buttonHref - Sets destination URL.
 * @param {string} icon - Sets icon to be used.
 * @param {string} imageSrc - Sets URI for image source.
 * @param {string} titleText - Sets title text.
 * @param {string} type - Sets the type of Card to generate.
 * @param {string} author - Sets author for News Card.
 * @param {string} agency - Sets agency for News Card.
 * @param {string} date - Sets date for News Card.
 * 
 * @returns {React.ReactElement} Returns the Card component.
 */

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
  date: PropTypes.string,
  icon: PropTypes.string,
  imageSrc: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Card