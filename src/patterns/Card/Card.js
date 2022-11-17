import React from 'react'

const Card = ({ imageSrc, altText, titleText, bodyText, buttonText, buttonHref }) => {
  return (
    <div className={'card'}>
      <img className={'card-img'} src={imageSrc} alt={altText} />
      <div className={'card-body bg-gray-50 bg-gray-100-hover'}>
        <h3 className={'card-title'}>{titleText}</h3>
        <p>{bodyText}</p>
        {
          buttonText ?
            <a className='btn btn-primary p-x-md' href={buttonHref}>{buttonText}<span className='sr-only'>with link related to card title</span></a> :
            null
        }
      </div>
    </div>
  )
}

export default Card