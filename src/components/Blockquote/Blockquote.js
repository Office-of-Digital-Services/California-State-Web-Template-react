import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Customizable blockquote section
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#blockquote
 * 
 * @example
 * // Generates a Blockquote with quotation mark graphic
 * <Blockquote
 *   withGraphic={true}
 *   quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
 *   author={'Holly Zuluaga'}
 * /> 
 *  
 * @param {boolean} [withGraphic=true] - Sets if quotation mark graphic is displayed.
 * @param {boolean} [withPulledQuote=false] - Centers quotation mark graphic. 
 * @param {boolean} [isProminent=false] - Sets if prominent styling should be applied to blockquote.
 * @param {string} quote - Quote text to display.
 * @param {string} author - Author name to display.
 * @param {string} [imageSrc] - File path for including image.
 * @param {string} [altText] - Alternate text for included image.
 * @returns {React.ReactElement} Returns the Blockquote component
 */

const Blockquote = ({ withGraphic = true, withPulledQuote = false, isProminent = false, quote, author, imageSrc, altText }) => {

  const buildClassName = (addGraphic, addPulledQuote, addProminent) => {
    let str = '';
    if (!addGraphic) {
      str += 'no-quotation-mark ';
    }
    if (addPulledQuote) {
      str += 'pull-quote ';
    }
    if (addProminent) {
      str += 'prominent';
    }
    return str;
  }

  const content = imageSrc ? (
    <div className={'row'}>
      <div className={'col-md-4 text-right p-r-md p-t-sm'}>
        <img src={imageSrc} className={'img-fluid img-circle height-150'} alt={altText} />
      </div>
      <div className={'col-md-8'}>
        <blockquote className={buildClassName(withGraphic, withPulledQuote, isProminent)}>
          <p>{quote}</p>
          <footer>{author}</footer>
        </blockquote>
      </div>
    </div>
  ) :
    (
      <blockquote className={buildClassName(withGraphic, withPulledQuote, isProminent)}>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
    )

  return content;
}

Blockquote.propTypes = {
  altText: PropTypes.string,
  author: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  isProminent: PropTypes.bool,
  quote: PropTypes.string.isRequired,
  withGraphic: PropTypes.bool,
  withPulledQuote: PropTypes.bool
}

export default Blockquote