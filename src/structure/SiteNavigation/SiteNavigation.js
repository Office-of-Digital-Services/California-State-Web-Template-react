import React from 'react';
import PropTypes from 'prop-types';
import Megamenu from './Megamenu';
import NavigationDropdownMenu from './NavigationDropdownMenu';
import SingleLevelMenu from './SingleLevelMenu';
import IconMenu from './IconMenu';

const SiteNavigation = ({ type, contentArr }) => {

  const setType = (typeProp) => {
    switch (typeProp) {
      case 'megamenu':
        return <Megamenu contentArr={contentArr} />
      case 'dropdown':
        return <NavigationDropdownMenu contentArr={contentArr} />
      case 'single':
        return <SingleLevelMenu contentArr={contentArr} />
      case 'icon':
        return <IconMenu contentArr={contentArr} />
      default:
        return;
    }
  }

  return (
    <div>{setType(type)}</div>
  )
}

SiteNavigation.propTypes = {
  contentArr: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

export default SiteNavigation