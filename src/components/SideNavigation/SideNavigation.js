import React from 'react';
import PropTypes from 'prop-types';
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

SideNavigation.propTypes = {
  contentArr: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default SideNavigation