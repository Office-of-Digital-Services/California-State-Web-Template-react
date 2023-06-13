import React from 'react';
import PropTypes from 'prop-types';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

const Article = ({ articleContentArr, author, city, date, email, leadText, phone, socialMediaContentArr, title }) => {
  return (
    // Begin News Article
    <>
      <p className="m-t-md">{date} | Press release</p>
      <h1>{title}</h1>
      <p className="lead">{leadText}</p>
      <p>By {author}</p>

      {socialMediaContentArr ?
        <div className="socialsharer-container m-y-lg float-none">
          <SocialMediaIcons
            contentArr={socialMediaContentArr}
          />
        </div>
        :
        null
      }

      <hr className="m-b-lg" />

      {articleContentArr.map((item, idx) => (
        <React.Fragment key={`article-fragment-${idx}`}>
          {item.subtitle ? <h2 key={`article-subtitle-${idx}`}>{item.subtitle}</h2> : null}
          <p key={`article-paragraph-${idx}`}>
            {idx === 0 ? <span className="bold" key={`article-span-${idx}`}>{city}, California - </span> : null}
            {item.text}
          </p>
        </React.Fragment>
      ))}

      <hr className="m-t-lg d-block" />

      <h3 className="h4">Press contact</h3>
      <p className="bold">Communications Office</p>
      <p><a href="/" aria-disabled="true">{email}</a></p>
      <p>{phone}</p>
    </>
    //  End News Article
  )
}

Article.propTypes = {
  articleContentArr: PropTypes.array,
  author: PropTypes.string,
  city: PropTypes.string,
  date: PropTypes.string,
  email: PropTypes.string,
  leadText: PropTypes.string,
  phone: PropTypes.string,
  socialMediaContentArr: PropTypes.array,
  title: PropTypes.string
}

export default Article