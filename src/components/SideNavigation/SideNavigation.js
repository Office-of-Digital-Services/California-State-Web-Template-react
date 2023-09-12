import React from 'react';
import PropTypes from 'prop-types';
import SingleLevelList from './SingleLevelList';
import MultiLevelList from './MultiLevelList';
import NavigationAccordionList from './NavigationAccordionList';

/**
 * @summary Side navigation menu with a variety of types.
 * 
 * @example
 * <SideNavigation
     type={'accordion'}
     contentArr={[
       { href: '#', text: 'Page 1' },
         {
           href: '#', text: 'Page 2', isOpen: true,
           secondLevelArr: [
             { href: '#', text: 'Page A' },
             { href: '#', text: 'Page B' }
           ]
         },
       { href: '#', text: 'Page 3' },
       { href: '#', text: 'Page 4' },
       { href: '#', text: 'Page 5' },
     ]}
   />
 * @param {string} type - Sets type of navigation menu. Can be 'single', 'multi', or 'accordion'. 
   @param {array} contentArr - An array of objects. Object can contain string:href, string:text, array[object]:secondLevelArr

 * @returns {React.ReactElement} returns SideNavigation component.
 */

const SideNavigation = ({ type, contentArr }) => {

  let content;

  if (!type || type === 'single') {
    content = <SingleLevelList contentArr={contentArr} />
  }

  if (type === 'multi') {
    content = <MultiLevelList contentArr={contentArr} />
  }

  if (type === 'accordion') {
    content = <NavigationAccordionList contentArr={contentArr} />
  }

  return content
}

SideNavigation.propTypes = {
  contentArr: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default SideNavigation