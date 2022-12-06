import React from 'react';
import Megamenu from './Megamenu';
import NavigationDropdownMenu from './NavigationDropdownMenu';
import SingleLevelMenu from './SingleLevelMenu';

const SiteNavigation = ({ type, contentArr }) => {

  const setType = (typeProp) => {
    switch (typeProp) {
      case 'megamenu':
        return <Megamenu contentArr={contentArr} />
      case 'dropdown':
        return <NavigationDropdownMenu contentArr={contentArr} />
      case 'single':
        return <SingleLevelMenu contentArr={contentArr} />
      default:
        return;
    }
  }

  return (
    <div>{setType(type)}</div>
  )
}

export default SiteNavigation