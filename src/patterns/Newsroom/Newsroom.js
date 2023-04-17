import React from 'react';
import PropTypes from 'prop-types';

const Newsroom = ({ featuredArr, cardArr, latestArr }) => {
  return (
    <>
      <h1 className={'mt-lg-0'}>Newsroom</h1>

      <h2>Featured</h2>
      <article className={'news-item'}>
        {featuredArr.map((item, idx) => (
          <div className={'row py-1'}>
            <div className={'col-md-4'}>
              <img src={item.imageSrc} alt={item.altText ? item.altText : 'Featured article avatar'} className={'img-fluid'} />
            </div>
            <div className={'col-md-8'}>
              <h3 className={'h4 mb-2'}>
                <a href={item.url} aria-disabled={'true'}>{item.headline}</a>
              </h3>
              <p>{`${item.date} | ${item.type}`}</p>
            </div>
          </div>
        ))}
        <hr />
      </article>

      <div className={'row m-t-lg'}>
        {cardArr.map((cardItem, cardIdx) => (
          <div className={'col-md-6 mb-4'}>
            <div className={'brd-gray-200 brd-solid-1 rounded-5 h-100 transition-0_3 shadow2-hover bg-white bg-gray-75-hover pos-rel p-a-md'}>
              <h3 className={'h5 m-t-0'}>
                <a href={cardItem.url} className={'link-before no-underline'} aria-disabled={'true'}>{cardItem.title}</a>
              </h3>
              <p className={'font-size-16 color-black'}>{cardItem.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className={'h3'}>Latest news</h2>
      <hr className={'m-y-md'} />
      {latestArr.map((latestItem, latestIdx) => (
        <>
          <h3 className={'lead font-weight-700'}>
            <a href={latestItem.url} aria-disabled={'true'}>{latestItem.headline}</a>
          </h3>
          <p>{`${latestItem.date} | ${latestItem.type}`}</p>
          <hr className={'m-y-md'} />
        </>
      ))}

    </>
  )
}

Newsroom.propTypes = {
  featuredArr: PropTypes.array.isRequired,
  cardArr: PropTypes.array.isRequired,
  latestArr: PropTypes.array.isRequired
}

export default Newsroom