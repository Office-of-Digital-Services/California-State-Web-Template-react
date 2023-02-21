import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Breadcrumb navigation links
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#breadcrumb
 * 
 * @example
 * <Breadcrumb
     breadcrumbArr={[
       {
         href: '#',
         title: 'Breadcrumb 1'
       },
       {
         href: '#',
         title: 'Breadcrumb 2'
       }
     ]}
     currentPage={'Current Page'}
   />
 * 
 * @param {string[]} breadcrumbArr - String array containing the page names to display in breadcrumbs.
 * @param {string} currentPage - Name of current page.
 * @returns {React.ReactElement} Returns the Breadcrumb component
 */

const Breadcrumb = ({ breadcrumbArr, currentPage }) => {
  return (
    <nav aria-label={'You are here'}>
      <ol className={'breadcrumb'}>
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
  breadcrumbArr: PropTypes.arrayOf(PropTypes.string).isRequired, 
  currentPage: PropTypes.string.isRequired
}

export default Breadcrumb