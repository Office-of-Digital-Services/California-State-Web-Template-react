import React from 'react';
import Footer from '../Footer/Footer';
import MobileControls from '../MobileControls/MobileControls';
import ActiveSearch from '../Search/ActiveSearch';
import SiteHeader from '../SiteHeader/SiteHeader';
import SingleLevelMenu from '../SiteNavigation/SingleLevelMenu';
import UtilityHeader from '../UtilityHeader/UtilityHeader';
import FeaturedSearch from '../Search/FeaturedSearch';

const CombinedStructure = () => {
  return (
    <>
      <UtilityHeader />
      {/* <SiteHeader /> */}
      {/* <FeaturedSearch /> */}
      {/* <MobileControls /> */}
      {/* <SingleLevelMenu linkObjectArr={[{ href: 'www.google.com', text: 'Go to Google' }]} /> */}
      {/* <Footer /> */}
    </>
  )
}

export default CombinedStructure