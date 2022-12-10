import React from 'react';
import SingleLevelList from './SingleLevelList';
import MultiLevelList from './MultiLevelList';
import NavigationAccordionList from './NavigationAccordionList';

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

export default SideNavigation