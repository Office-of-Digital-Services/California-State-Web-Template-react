import React from 'react'

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
      {contentArr.map((item, idx) => <a key={`smi-a-item${idx}`} className={setClassName(item.type)} title={`${capitalizeFirstLetter(item.type)} Link`} href={item.href}><span className='external-link-icon' aria-hidden='true'></span></a>)}
    </div>
  )
}

export default SocialMediaIcons