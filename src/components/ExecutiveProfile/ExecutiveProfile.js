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

export default ExecutiveProfile