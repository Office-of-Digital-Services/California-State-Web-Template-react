import React from 'react'

const Card = ({ icon, imageSrc, altText, titleText, bodyText, buttonText, buttonHref, type, author, agency, date }) => {

  const content = type === 'news' ?
    // {/* <!-- Article --> */}
    <article className="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
      <figure className="pos-rel m-b-0">
        <img className="img-fluid w-100" src={imageSrc} alt={altText} />
        <figcaption className="pos-abs top-sm p-l-0 rounded-3">
          <span className="btn btn-sm btn-standout rounded-0" href="#">{date}</span>
        </figcaption>
      </figure>

      <div className="p-a">
        <ul className="list-inline small m-y-0">
          <li className="list-inline-item">
            <span className="color-gray">By:</span>
            <span className="color-gray-dark color-primary-hover" href="#">{author}</span>
          </li>
          <li className="list-inline-item">
            <span className="color-gray">In:</span>
            <span className="color-gray-dark color-primary-hover" href="#">{agency}</span>
          </li>
        </ul>

        <h3 className="h4 m-t-0 m-b-sm">
          <a className="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href={buttonHref}>{titleText}</a>
        </h3>

        <p>{bodyText}</p>
      </div>
    </article>
    // {/* <!-- End Article --> */}
    :
    <div className={'card'}>
      {imageSrc ?
        <img className={'card-img'} src={imageSrc} alt={altText} /> :
        null
      }
      <div className={'card-body bg-gray-50 bg-gray-100-hover'}>
        {icon ? <span className={`${icon} text-huge d-block text-center color-p2 color-p2-hover`} aria-hidden={'true'}></span> : null}
        <h3 className={'card-title'}>{titleText}</h3>
        <p className={'m-b-md'}>{bodyText}</p>
        {
          buttonText ?
            <a className='btn btn-primary p-x-md' href={buttonHref}>{buttonText}<span className='sr-only'>with link related to card title</span></a> :
            null
        }
      </div>
    </div>

  return content;
}

export default Card