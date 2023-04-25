import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Display element for executive avatar image and text.
 * @example
 * // Generates a default executive profile
 * <ExecutiveProfile
      agency={'Government agency'}
      altText={'Executive profile avatar'}
      imageSrc={'./path/to/image.jpg'}
      linkText={'Bio or contact info'}
      linkUrl={'https://www.cdt.ca.gov'}
      name={'Name'}
      title={'Official Title'}
      type={'default'}
   />
 * @param {string} agency - Agency name to be displayed.
 * @param {string} [altText='Executive avatar'] - Alternative text for executive avatar image. 
 * @param {string} imageSrc - Path to executive image source.
 * @param {string} linkText - Text to display in anchor tag link.
 * @param {string} linkUrl - URL to visit on link click.
 * @param {string} name - Executive name to display.
 * @param {string} title - Executive title to display.
 * @param {string} type - Type of executive profile to display. Can be transparent, dark, or default if no type is given.
 * 
 * @returns {React.ReactElement} Returns the ExecutiveProfile component
 */

const ExecutiveProfile = ({ agency, altText = 'Executive avatar', imageSrc, linkText, linkUrl, name, title, type = 'default' }) => {
  const setClass = () => {
    switch (type) {
      case 'transparent':
        return 'bg-transparent'
      case 'dark':
        return 'bg-dark dark'
      default:
        return ''
    };
  }
  return (
    <figure class={`executive-profile ${setClass()}`}>
      <img src={imageSrc} alt={altText} />
      <div class="executive-profile-body">
        <p>{title}</p>
        <h3 class="executive-name">{name}</h3>
        <p>{agency}</p>
        <p><a href={linkUrl} aria-label="Link to Official's Website">{linkText}</a></p>
      </div>
    </figure>
  )
}

ExecutiveProfile.propTypes = {
  agency: PropTypes.string.isRequired,
  altText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default ExecutiveProfile