import React from 'react';
import PropTypes from 'prop-types';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

/**
 * @summary Page template for links to articles.
 * 
 * @example
 * <Article
     articleContentArr={[
       { text: 'This is your lead paragraph. It is the most important paragraph in your news article. Put all important information here in a concise. clear, and interesting way. It should include what happened, where, and when. When possible, also include who was involved and why. Other paragraphs can provide more detail and contain less important information.' },
       { text: 'The remaining paragraphs are supporting paragraphs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium dapibus diam, a finibus metus congue a. Vestibulum laoreet faucibus ultrices. Vestibulum condimentum lectus in arcu ultricies condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium dapibus diam, a finibus metus congue a. Vestibulum laoreet faucibus ultrices. Vestibulum condimentum lectus in arcu ultricies condimentum.' },
       { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aspernatur natus eaque molestiae sequi labore at dolor distinctio quod! Quod soluta omnis quam accusamus cupiditate aperiam odio rem expedita magnam.' },
       { subtitle: 'Article Subtitle', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est vero magni quam delectus, repellat sequi repellendus cum numquam cupiditate molestiae blanditiis atque accusamus dolorum tempore! Maxime ducimus voluptate qui.' }
     ]}
     author={'Jane Doe'}
     city={'Sacramento'}
     date={'Apr 14th, 2023'}
     email={'comms-email@state.ca.gov'}
     leadText={'Here is some nice lead text for the article.'}
     phone={'(916) 123-4567'}
     socialMediaContentArr={
       [
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
       ]
     }
     title={'Awesome Article'}
   />
 * 
 * @param {object[]} articleContentArr - An array of objects containing the content of the article. Object shape: {string:subtitle, string:text}
 * @param {string} articleContentArr.subtitle - Generates subheader within the article.
 * @param {string} articleContentArr.text - Generates paragraph from provided text.
 * @param {string} author - Author's name.
 * @param {string} city - Name of city in regards to article.
 * @param {string} date - Article's publishing date.
 * @param {string} email - Contact email of author/agency.
 * @param {string} leadText - Lead text of article.
 * @param {string} phone - Contact phone of author/agency.
 * @param {object[]} socialMediaContentArr - Array of objects to pass to SocialMediaIcons component.
 * @param {string} title - Title of article.
 * 
 * @returns {React.ReactElement} Returns Article component.
 */

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
  articleContentArr: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  leadText: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  socialMediaContentArr: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default Article