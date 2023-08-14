import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary A block of social media icons with styling.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#social-media-icons
 * 
 * @example
 * <SocialMediaIcons
     contentArr={[
       {
         type: 'facebook',
         href: 'https://www.facebook.com/'
       },
       {
         type: 'github',
         href: 'https://www.github.com/'
       },
       {
         type: 'email',
         href: 'mailto:your_email@ca.gov'
       }
    ]}
   />
 * 
 * @param {array} contentArr - Array containing string:type, string:href
 * @param {string} contentArr.href - Sets destination URL for social media icon.
 * @param {string} content.type - Sets icon to display. Can be 'email', 'facebook', 'github', 'instagram', 'linkedin', 'twitter', or 'youtube'.
 * 
 * @returns {React.ReactElement} Returns the SocialMediaIcons component.
 */

const SocialMediaIcons = ({ contentArr }) => {

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const setClassName = (type) => {
    switch (type) {
      case 'facebook':
        return 'ca-gov-icon-share-facebook';
      case 'github':
        return 'ca-gov-icon-github';
      case 'twitter':
        return 'ca-gov-icon-share-twitter';
      case 'youtube':
        return 'ca-gov-icon-share-youtube';
      case 'linkedin':
        return 'ca-gov-icon-share-linkedin';
      case 'instagram':
        return 'ca-gov-icon-share-instagram';
      case 'email':
        return 'ca-gov-icon-share-email';
      default:
        return ''
    }
  }

  return (
    <div className='socialsharer-container'>
      {contentArr.map((item, idx) => <a key={`smi-a-item${idx}`} className={setClassName(item.type)} title={`${capitalizeFirstLetter(item.type)} Link`} href={item.href}><span className={'sr-only'}>{`Link to ${item.type}`}</span></a>)}
    </div>
  )
}

SocialMediaIcons.propTypes = {
  contentArr: PropTypes.array.isRequired
}

export default SocialMediaIcons