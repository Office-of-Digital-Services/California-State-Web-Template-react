import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

/**
 * @summary Generates a grid of multiple Cards
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Patterns#card-grid
 * 
 * @example
 * <CardGrid
     contentArr={
     [
      {
        titleText: 'Give your card a short title',
        bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
        imageSrc: cardImage,
        altText: 'Card size',
        buttonHref: 'https://www.google.com',
        buttonText: 'Go to Google',
      },
      {
        titleText: 'Short title',
        bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to the official news release or news section within your site.',
        imageSrc: cardImage,
        altText: 'Card size',
        buttonHref: 'https://www.google.com',
        buttonText: 'Go to Google',
        date: 'Month DD, YYYY',
        author: 'Author',
        agency: 'Agency',
        type: 'news'
      },
      {   
        titleText: 'Infographic',
        bodyText: 'Commonly recognized by visitors and generally reserved for data-rich visualization.',
        icon: 'ca-gov-icon-clipboard text-huge d-block text-center color-p2 color-p2-hover'
      },
     ]
     }
   />
 * 
 * @param {Object[]} contentArr
 * @param {string} agency - Sets agency for News Card.
 * @param {string} altText - Sets alt text for image.
 * @param {string} author - Sets author for News Card.
 * @param {string} bodyText - Sets body text.
 * @param {string} button - Sets button text.
 * @param {string} buttonHref - Sets destination URL.
 * @param {string} date - Sets date for News Card.
 * @param {string} icon - Sets icon to be used.
 * @param {string} imageSrc - Sets URI for image source.
 * @param {string} titleText - Sets title text.
 * @param {string} type - Sets the type of Card to generate.
 * 
 * @returns {React.ReactElement} Returns the CardGrid pattern.
 */

const CardGrid = ({ contentArr }) => {

  const setColNumber = () => {
    return `col-md-${Math.round(12 / contentArr.length)}`
  }

  return (
    <div className='row' style={contentArr.length % 2 !== 0 ? { justifyContent: 'center' } : null}>
      {
        contentArr.map((item, idx) => (
          <div className={setColNumber()} key={`cg-div-item${idx}`}>
            <Card
              titleText={item.titleText}
              bodyText={item.bodyText}
              imageSrc={item.imageSrc}
              altText={item.altText}
              buttonHref={item.buttonHref}
              buttonText={item.buttonText}
              type={item.type}
              author={item.author}
              agency={item.agency}
              date={item.date}
              icon={item.icon}
            />
          </div>
        ))
      }
    </div >
  )
}

CardGrid.propTypes = {
  contentArr: PropTypes.array.isRequired
}

export default CardGrid