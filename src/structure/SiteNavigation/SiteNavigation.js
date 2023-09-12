import React from 'react';
import PropTypes from 'prop-types';
import Megamenu from './Megamenu';
import NavigationDropdownMenu from './NavigationDropdownMenu';
import SingleLevelMenu from './SingleLevelMenu';
import IconMenu from './IconMenu';

/**
 * @summary Generates site navigation based on 'type' passed in
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Structure#sitenavigation
 * 
 * @example
 * <SiteNavigation
     type={'single'}
     contentArr={[
       { href: '#', text: 'Nav Link 1' },
       { href: '#', text: 'Nav Link 2' },
       { href: '#', text: 'Nav Link 3' },
       { href: '#', text: 'Nav Link 4' }
     ]}
   />
 * 
 * @param {Object[]} contentArr - An array of objects containing key/value pairs for the type of navigation component specified.
 * @param {string} type - Sets the type of navigation element to use. Can be dropdown, megamenu, single.
 * 
 * @param {string} href - For single level menu, sets the destination URL.
 * @param {string} text - For single level menu, sets the link text.
 * 
 * @param {string} navHeader - For dropdown menu, sets the dropdown title.
 * @param {Object[]} navBodyArr - For dropdown menu, contains the key/value pairs: href, title.
 * @param {string} href - navBodyArr[].href - For dropdown menu, sets the destination URL for link within dropdown.
 * @param {string} title - navBodyArr[].title - For dropdown menu, sets the title for link within dropdown.
 * 
 * @param {Boolean} hasBorder - For megamenu, sets whether border is visible or not.
 * @param {string} navHeader - For megamenu, sets header text.
 * @param {Object[]} navBodyArr - For megamenu, contains key/value pairs: body, href, icon, title.
 * @param {string} body - navBodyArr[].body - For megamenu, sets body text.
 * @param {string} href - navBodyArr[].href - For megamenu, sets the destination URL for link within megamenu.
 * @param {string} icon - navBodyArr[].icon - For megamenu, sets the icon to be used within megamenu.
 * @param {string} title - navBodyArr[].title - For megamenu, sets the title text to be used within megamenu. * 
 * 
 * @returns 
 */

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