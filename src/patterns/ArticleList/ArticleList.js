import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ contentArr }) => {
  return (
    <>
      {contentArr.map((item, idx) => (
        <>
          <h2>{item.listDate}</h2>
          <hr class="m-y-md" />

          {item.articles.map((articleItem, articleIdx) => (
            <>
              <h3 class="lead font-weight-700"><a href={articleItem.url} aria-disabled="true">{articleItem.leadText}</a></h3>
              <p>{`${articleItem.date} | ${articleItem.type}`}</p>
              <hr class="m-y-md" />
            </>
          ))}
        </>
      ))}
    </>
  )
}

ArticleList.propTypes = {
  contentArr: PropTypes.array.isRequired
}

export default ArticleList