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
      {contentArr.map((item, idx) => <a className={setClassName(item.type)} title={`${capitalizeFirstLetter(item.type)} Link`} href={item.href}><span className='external-link-icon' aria-hidden='true'></span></a>)}
      {/* <a className={setClassName(contentArr.type)} title={`${capitalizeFirstLetter(contentArr.type)} Link`} href={contentArr.href}><span className='external-link-icon' aria-hidden='true'></span></a> */}

      {/* <a className='ca-gov-icon-share-facebook' title='Facebook Link' href='https://www.facebook.com/'><span className='external-link-icon' aria-hidden='true'></span></a>
      <a className='ca-gov-icon-github' title='GitHub Link' href='https://github.com/'><span className='external-link-icon' aria-hidden='true'></span></a>
      <a className='ca-gov-icon-share-twitter' title='Twitter Link' href='https://twitter.com/'><span className='external-link-icon' aria-hidden='true'></span></a>
      <a className='ca-gov-icon-share-youtube' title='Youtube Link' href='https://www.youtube.com/'><span className='external-link-icon' aria-hidden='true'></span></a>
      <a className='ca-gov-icon-share-linkedin' title='Linkedin Link' href='https://www.linkedin.com/'><span className='external-link-icon' aria-hidden='true'></span></a>
      <a className='ca-gov-icon-share-instagram' title='Instagram Link' href='https://www.instagram.com/'><span className='external-link-icon' aria-hidden='true'></span></a>
      <a className='ca-gov-icon-share-email' title='Email Link' href='mailto:your_email@ca.gov'></a> */}
    </div>
  )
}

export default SocialMediaIcons