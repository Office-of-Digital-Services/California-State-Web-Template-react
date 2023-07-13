import React from 'react';

const ImageCard = ({ altText, bodyText, buttonHref, imageSrc, titleText }) => (
  <div className="card pos-rel">
    <img className="card-img" src={imageSrc} alt={altText} />
    <div className="card-body bg-gray-50 bg-gray-100-hover">
      <h3 className="card-title">
        <a href={buttonHref} className="link-before">
          {titleText}
        </a>
      </h3>
      <p>
        {bodyText}
      </p>
    </div>
  </div>
)

export default ImageCard