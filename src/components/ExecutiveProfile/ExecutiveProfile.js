import React from 'react';

const ExecutiveProfile = ({ agency, altText = 'Executive avatar', imageSrc, linkText, linkUrl, name, title, type }) => {
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
    <figure className={`executive-profile ${setClass()}`}>
      <img src={imageSrc} alt={altText} />
      <div className="executive-profile-body">
        <p>{title}</p>
        <h3 className="executive-name">{name}</h3>
        <p>{agency}</p>
        <p><a href={linkUrl} aria-label="Link to Official's Website">{linkText}</a></p>
      </div>
    </figure>
  )
}

export default ExecutiveProfile