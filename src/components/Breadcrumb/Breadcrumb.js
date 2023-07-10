import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ breadcrumbArr, currentPage }) => {
  return (
    <nav aria-label={'Breadcrumb'} className={'breadcrumbs'}>
      <ol>
        {breadcrumbArr.map((item, idx) => {
          return (
            <li key={`bc-list-item${idx}`}>
              <a href={item.href} title={item.title}>{item.title}</a>
            </li>
          )
        })}
        <li className={'active'}>{currentPage}</li>
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  breadcrumbArr: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired
}

export default Breadcrumb